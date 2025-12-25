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
</head>
<body style="margin: 0; padding: 24px; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa; color: #1a202c;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04); overflow: hidden;">
        
        <!-- Header -->
        <tr>
            <td style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); color: #ffffff; padding: 40px 36px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Business Inquiry</h1>
                <p style="margin: 12px 0 0; opacity: 0.9; font-size: 17px; font-weight: 500;">Nexor Commerce LLC</p>
            </td>
        </tr>
        
        <!-- Content -->
        <tr>
            <td style="padding: 40px 36px;">
                
                <!-- Contact Information -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 36px; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
                    <tr>
                        <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #4a5568; display: inline-block; width: 90px; font-size: 15px; font-weight: 600;">Name:</strong>
                            <span style="color: #1a202c; font-size: 15px; font-weight: 500;">${escapeHtml(
                              sanitizedData.fullName
                            )}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #4a5568; display: inline-block; width: 90px; font-size: 15px; font-weight: 600;">Email:</strong>
                            <a href="mailto:${escapeHtml(
                              sanitizedData.email
                            )}" style="color: #3182ce; text-decoration: none; font-size: 15px; font-weight: 500; border-bottom: 1px solid #3182ce;">${escapeHtml(
      sanitizedData.email
    )}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #4a5568; display: inline-block; width: 90px; font-size: 15px; font-weight: 600;">Company:</strong>
                            <span style="color: #1a202c; font-size: 15px; font-weight: 500;">${escapeHtml(
                              sanitizedData.company || "Not specified"
                            )}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 24px;">
                            <strong style="color: #4a5568; display: inline-block; width: 90px; font-size: 15px; font-weight: 600;">Date:</strong>
                            <span style="color: #1a202c; font-size: 15px; font-weight: 500;">${new Date().toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "long", day: "numeric" }
                            )} at ${new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}</span>
                        </td>
                    </tr>
                </table>
                
                <!-- Message -->
                <div style="margin-bottom: 36px;">
                    <h3 style="margin: 0 0 20px; color: #2d3748; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">Message Content:</h3>
                    <div style="background: #f7fafc; border: 2px solid #e2e8f0; border-left: 6px solid #2d3748; padding: 28px; border-radius: 12px;">
                        <pre style="margin: 0; color: #1a202c; font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word; font-weight: 400;">${escapeHtml(
                          sanitizedData.message
                        )}</pre>
                    </div>
                </div>
                
                <!-- Reply Button -->
                <div style="text-align: center;">
                    <a href="mailto:${escapeHtml(
                      sanitizedData.email
                    )}?subject=Re: Your Business Inquiry" 
                       style="display: inline-block; background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 16px; letter-spacing: 0.2px; box-shadow: 0 4px 14px rgba(45, 55, 72, 0.3); transition: all 0.2s ease;">
                       Reply to Inquiry
                    </a>
                </div>
                
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 24px 36px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #718096; font-size: 14px; font-weight: 500;">
                    Nexor Commerce LLC • Business Inquiry • ${new Date().toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
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
