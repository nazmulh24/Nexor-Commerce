import nodemailer from "nodemailer";

// Input validation and sanitization
const validateInput = (str, maxLength = 500) => {
  if (typeof str !== "string") return false;
  return str.trim().length > 0 && str.trim().length <= maxLength;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
};

const escapeHtml = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};

// Simple in-memory rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

const checkRateLimit = (ip) => {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const validRequests = requests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );

  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  return true;
};

export default async function handler(req, res) {
  // Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress || "unknown";
  if (!checkRateLimit(clientIp)) {
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  const { fullName, company, email, message } = req.body;

  // Enhanced input validation
  if (
    !validateInput(fullName, 100) ||
    !validateEmail(email) ||
    !validateInput(message, 1200)
  ) {
    return res.status(400).json({ error: "Invalid input provided" });
  }

  if (company && !validateInput(company, 100)) {
    return res.status(400).json({ error: "Invalid company name" });
  }

  // Sanitize inputs
  const sanitizedData = {
    fullName: fullName.trim(),
    company: company?.trim() || null,
    email: email.trim().toLowerCase(),
    message: message.trim(),
  };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_TO,
    replyTo: sanitizedData.email,
    subject: `Business Inquiry from ${
      sanitizedData.company || sanitizedData.fullName
    }`,
    text: `Name: ${sanitizedData.fullName}\nCompany: ${
      sanitizedData.company || "N/A"
    }\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`,
    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Inquiry</title>
    <style>
        .container { width: 100% !important; max-width: 650px !important; }
        .info-label { display: inline-block !important; vertical-align: top !important; }
        .info-value { word-break: break-word !important; }
        
        @media only screen and (max-width: 600px) {
            body { padding: 8px !important; background-color: #f5f7fa !important; }
            .container { 
                max-width: 100% !important; 
                width: 100% !important;
                margin: 0 !important; 
                border-radius: 12px !important; 
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
            }
            .header-padding { padding: 16px 12px !important; }
            .content-padding { padding: 12px !important; }
            .header-title { font-size: 20px !important; line-height: 1.2 !important; }
            .header-subtitle { font-size: 14px !important; margin-top: 4px !important; }
            .section-title { font-size: 16px !important; margin-bottom: 10px !important; }
            .info-table { margin-bottom: 12px !important; border-radius: 8px !important; }
            .info-cell { 
                padding: 8px 10px !important;
                display: block !important;
            }
            .info-label { 
                width: auto !important; 
                font-size: 11px !important;
                display: block !important;
                margin-bottom: 2px !important;
            }
            .info-value { 
                font-size: 12px !important;
                display: block !important;
                word-break: break-all !important;
            }
            .message-container { 
                padding: 10px !important; 
                border-radius: 8px !important;
                margin-bottom: 12px !important;
            }
            .message-text { 
                font-size: 12px !important; 
                line-height: 1.4 !important;
                word-break: break-word !important;
            }
            .reply-button { 
                padding: 10px 20px !important; 
                font-size: 13px !important; 
                border-radius: 8px !important;
                display: block !important;
                width: auto !important;
                text-align: center !important;
                margin: 0 auto !important;
                max-width: 200px !important;
            }
            .footer-padding { padding: 10px 12px !important; }
            .footer-text { 
                font-size: 10px !important;
                line-height: 1.3 !important;
            }
        }
        
        @media only screen and (max-width: 480px) {
            body { padding: 6px !important; }
            .container { border-radius: 10px !important; }
            .header-padding { padding: 12px 10px !important; }
            .content-padding { padding: 10px !important; }
            .header-title { font-size: 18px !important; }
            .header-subtitle { font-size: 13px !important; }
            .section-title { font-size: 15px !important; }
            .info-cell { padding: 6px 8px !important; }
            .info-label { font-size: 10px !important; }
            .info-value { font-size: 11px !important; }
            .message-container { padding: 8px !important; border-radius: 6px !important; }
            .message-text { font-size: 11px !important; }
            .reply-button { 
                padding: 8px 16px !important; 
                font-size: 12px !important; 
                border-radius: 6px !important;
                max-width: 160px !important;
            }
            .footer-padding { padding: 8px 10px !important; }
            .footer-text { font-size: 9px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 12px; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa; color: #1a202c;">
    
    <table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04); overflow: hidden;">
        
        <!-- Header -->
        <tr>
            <td class="header-padding" style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); color: #ffffff; padding: 32px 24px; text-align: center;">
                <h1 class="header-title" style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Business Inquiry</h1>
                <p class="header-subtitle" style="margin: 8px 0 0; opacity: 0.9; font-size: 15px; font-weight: 500;">Nexor Commerce LLC</p>
            </td>
        </tr>
        
        <!-- Content -->
        <tr>
            <td class="content-padding" style="padding: 32px 24px;">
                
                <!-- Contact Information -->
                <table width="100%" cellpadding="0" cellspacing="0" class="info-table" style="margin-bottom: 28px; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
                    <tr>
                        <td class="info-cell" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <div>
                                <strong class="info-label" style="color: #4a5568; display: inline-block; width: 80px; font-size: 14px; font-weight: 600;">Name:</strong>
                                <span class="info-value" style="color: #1a202c; font-size: 14px; font-weight: 500;">${escapeHtml(
                                  sanitizedData.fullName
                                )}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="info-cell" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <div>
                                <strong class="info-label" style="color: #4a5568; display: inline-block; width: 80px; font-size: 14px; font-weight: 600;">Email:</strong>
                                <a href="mailto:${escapeHtml(
                                  sanitizedData.email
                                )}" class="info-value" style="color: #3182ce; text-decoration: none; font-size: 14px; font-weight: 500; border-bottom: 1px solid #3182ce;">${escapeHtml(
      sanitizedData.email
    )}</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="info-cell" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <div>
                                <strong class="info-label" style="color: #4a5568; display: inline-block; width: 80px; font-size: 14px; font-weight: 600;">Company:</strong>
                                <span class="info-value" style="color: #1a202c; font-size: 14px; font-weight: 500;">${escapeHtml(
                                  sanitizedData.company || "Not specified"
                                )}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="info-cell" style="padding: 16px 20px;">
                            <div>
                                <strong class="info-label" style="color: #4a5568; display: inline-block; width: 80px; font-size: 14px; font-weight: 600;">Date:</strong>
                                <span class="info-value" style="color: #1a202c; font-size: 14px; font-weight: 500;">${new Date().toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )} ${new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}</span>
                            </div>
                        </td>
                    </tr>
                </table>
                
                <!-- Message -->
                <div style="margin-bottom: 28px;">
                    <h3 class="section-title" style="margin: 0 0 16px; color: #2d3748; font-size: 18px; font-weight: 700; letter-spacing: -0.3px;">Message Content:</h3>
                    <div class="message-container" style="background: #f7fafc; border: 2px solid #e2e8f0; border-left: 6px solid #2d3748; padding: 20px; border-radius: 12px;">
                        <pre class="message-text" style="margin: 0; color: #1a202c; font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; font-weight: 400;">${escapeHtml(
                          sanitizedData.message
                        )}</pre>
                    </div>
                </div>
                
                <!-- Reply Button -->
                <div style="text-align: center;">
                    <a href="mailto:${escapeHtml(
                      sanitizedData.email
                    )}?subject=Re: Your Business Inquiry" 
                       class="reply-button" style="display: inline-block; background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; letter-spacing: 0.2px; box-shadow: 0 4px 14px rgba(45, 55, 72, 0.3);">
                       Reply to Inquiry
                    </a>
                </div>
                
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td class="footer-padding" style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p class="footer-text" style="margin: 0; color: #718096; font-size: 13px; font-weight: 500;">
                    Nexor Commerce LLC • Business Inquiry<br>
                    ${new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                </p>
            </td>
        </tr>
        
    </table>
    
</body>
</html>
    `,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Inquiry sent successfully." });
  } catch (error) {
    // Log error for debugging but don't expose details to client
    console.error("Email sending failed:", {
      timestamp: new Date().toISOString(),
      error: error.message,
      code: error.code,
    });
    return res.status(500).json({
      error: "Unable to send message. Please try again later.",
    });
  }
}
