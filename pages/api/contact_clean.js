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
    !validateInput(message, 2000)
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
    secure: parseInt(process.env.EMAIL_SERVER_PORT, 10) === 465,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    // Removed insecure TLS setting for better security
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVER_USER,
    to: process.env.EMAIL_TO,
    replyTo: sanitizedData.email,
    subject: `New Business Inquiry - ${
      sanitizedData.company || sanitizedData.fullName
    }`,
    text: `Name: ${sanitizedData.fullName}\nCompany: ${
      sanitizedData.company || "N/A"
    }\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Inquiry</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
            line-height: 1.6; 
            color: #2d3748; 
            background-color: #f7fafc;
            padding: 20px;
        }
        .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 8px;
            overflow: hidden; 
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        .header { 
            background: #2d3748; 
            color: white; 
            padding: 30px 25px; 
            text-align: center;
        }
        .logo {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }
        .header h1 { 
            font-size: 24px; 
            font-weight: 600; 
            margin-bottom: 5px;
        }
        .header p { 
            opacity: 0.9; 
            font-size: 14px;
        }
        .content { 
            padding: 30px 25px;
        }
        .info-section {
            margin-bottom: 25px;
        }
        .info-row { 
            display: flex;
            margin-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 15px;
        }
        .info-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .info-label { 
            width: 120px;
            font-weight: 600; 
            color: #4a5568;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .info-value { 
            flex: 1;
            color: #2d3748; 
            font-size: 14px;
        }
        .info-value a {
            color: #3182ce;
            text-decoration: none;
        }
        .info-value a:hover {
            text-decoration: underline;
        }
        .icon {
            width: 16px;
            height: 16px;
            color: #718096;
        }
        .message-section { 
            background: #f7fafc; 
            padding: 20px; 
            border-radius: 6px; 
            margin-bottom: 25px;
            border: 1px solid #e2e8f0;
        }
        .message-label { 
            font-weight: 600; 
            color: #4a5568;
            margin-bottom: 10px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .message-content { 
            color: #2d3748; 
            line-height: 1.7; 
            font-size: 15px;
        }
        .action-section {
            text-align: center;
            margin-bottom: 20px;
        }
        .reply-button { 
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #2d3748; 
            color: #ffffff; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 6px; 
            font-weight: 600; 
            font-size: 14px;
        }
        .reply-button:hover {
            background: #1a202c;
        }
        .footer { 
            background: #f7fafc; 
            padding: 20px 25px; 
            border-top: 1px solid #e2e8f0; 
            text-align: center; 
        }
        .footer-brand {
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .footer-text { 
            color: #718096; 
            font-size: 12px;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .content { 
                padding: 20px 15px;
            }
            .header {
                padding: 20px 15px;
            }
            .info-row {
                flex-direction: column;
                gap: 5px;
            }
            .info-label {
                width: auto;
                font-size: 13px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" stroke-width="2"/>
                    <path d="M3 8l9 6 9-6" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <h1>New Business Inquiry</h1>
            <p>Nexor Commerce LLC</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <div class="info-row">
                    <div class="info-label">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                        Contact
                    </div>
                    <div class="info-value">${escapeHtml(
                      sanitizedData.fullName
                    )}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        Email
                    </div>
                    <div class="info-value">
                        <a href="mailto:${escapeHtml(
                          sanitizedData.email
                        )}">${escapeHtml(sanitizedData.email)}</a>
                    </div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z"/>
                        </svg>
                        Company
                    </div>
                    <div class="info-value">${escapeHtml(
                      sanitizedData.company || "Not specified"
                    )}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                        </svg>
                        Received
                    </div>
                    <div class="info-value">${new Date().toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )} at ${new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}</div>
                </div>
            </div>
            
            <div class="message-section">
                <div class="message-label">
                    <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/>
                    </svg>
                    Message
                </div>
                <div class="message-content">${escapeHtml(
                  sanitizedData.message
                )}</div>
            </div>
            
            <div class="action-section">
                <a href="mailto:${escapeHtml(
                  sanitizedData.email
                )}?subject=Re: Your inquiry&body=Hello ${escapeHtml(
      sanitizedData.fullName
    )},%0D%0A%0D%0AThank you for contacting us." class="reply-button">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.25-5.01a.75.75 0 010-1.085l5.25-5.01a.75.75 0 011.06.025z"/>
                    </svg>
                    Reply
                </a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-brand">Nexor Commerce LLC</div>
            <div class="footer-text">Business inquiry notification • ${new Date().toLocaleDateString()}</div>
        </div>
    </div>
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
