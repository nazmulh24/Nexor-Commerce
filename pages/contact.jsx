import { useState, useCallback } from "react";
import Layout from "../components/Layout";

// Client-side validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
};

const validateInput = (value, maxLength = 500) => {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
};

const sanitizeInput = (value) => {
  return typeof value === "string" ? value.replace(/[<>"'&]/g, "") : "";
};

const countWords = (text) => {
  if (!text || typeof text !== "string") return 0;
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
};

const FormField = ({
  id,
  label,
  type = "text",
  required,
  maxLength,
  className = "",
  value = "",
  showWordCount = false,
  ...props
}) => (
  <div className={`form-row ${className}`}>
    <label htmlFor={id}>
      {label}
      {required && <span className="required-asterisk">*</span>}
    </label>
    {type === "textarea" ? (
      <div className="textarea-container">
        <textarea
          id={id}
          name={id}
          rows={6}
          required={required}
          maxLength={maxLength}
          style={{ resize: "vertical" }}
          value={value}
          {...props}
        />
        {showWordCount && (
          <div className="word-counter">{countWords(value)}/200 words</div>
        )}
      </div>
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        {...props}
      />
    )}
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = useCallback(() => {
    const errors = {};

    if (!validateInput(formData.fullName, 100)) {
      errors.fullName = "Name is required and must be less than 100 characters";
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateInput(formData.message, 1200)) {
      errors.message = "Message is required and must be less than 200 words";
    }

    if (formData.company && !validateInput(formData.company, 100)) {
      errors.company = "Company name must be less than 100 characters";
    }

    return errors;
  }, [formData]);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      // Only remove dangerous characters, preserve spaces and normal text
      const sanitizedValue = value.replace(/[<>"'&]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

      // Clear validation error when user starts typing
      if (validationErrors[name]) {
        setValidationErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [validationErrors]
  );

  const resetForm = useCallback(() => {
    setFormData({ fullName: "", email: "", company: "", message: "" });
    setValidationErrors({});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setStatus("loading");
    setValidationErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest", // CSRF protection
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        resetForm();
      } else {
        const errorData = await response.json();
        if (response.status === 429) {
          setStatus("rate-limited");
        } else {
          setStatus("error");
        }
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Layout title="Contact Nexor Commerce LLC | Business Inquiries">
      <section className="section">
        <div className="container narrow">
          <h1>Contact Us</h1>
          <p>
            We welcome inquiries from brands, distributors, and business
            partners interested in working with Nexor Commerce LLC.
          </p>
          <p>
            Our team focuses on establishing reliable and long-term partnerships
            built on transparency, professionalism, and efficient operations.
          </p>

          <div className="contact-info">
            <h3>Email</h3>
            <p>
              <a href="mailto:sales@nexorcommerce.com">
                sales@nexorcommerce.com
              </a>
            </p>
            <p className="small-text">
              For all business-related inquiries, please contact us via email.
              Our team will respond promptly.
            </p>
          </div>

          {status === "success" ? (
            <div className="form-success-message">
              Thank you for contacting Nexor Commerce LLC. We will review your
              inquiry and respond shortly.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <FormField
                id="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                maxLength={100}
                required
                placeholder="John Smith"
              />
              {validationErrors.fullName && (
                <p className="form-field-error">{validationErrors.fullName}</p>
              )}

              <FormField
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                maxLength={100}
                required
                placeholder="john.smith@acmecorp.com"
              />
              {validationErrors.email && (
                <p className="form-field-error">{validationErrors.email}</p>
              )}

              <FormField
                id="company"
                label="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                maxLength={100}
                placeholder="Acme Corporation"
              />
              {validationErrors.company && (
                <p className="form-field-error">{validationErrors.company}</p>
              )}

              <FormField
                id="message"
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={1000}
                required
                showWordCount={true}
                placeholder="Tell us about your business inquiry or how we can help..."
              />
              {validationErrors.message && (
                <p className="form-field-error">{validationErrors.message}</p>
              )}

              <div className="form-actions">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </button>
              </div>

              {status === "error" && (
                <p className="form-error-message">
                  Unable to send inquiry. Please try again later.
                </p>
              )}

              {status === "rate-limited" && (
                <p className="form-error-message">
                  Too many requests. Please wait before trying again.
                </p>
              )}
            </form>
          )}

          <div className="business-disclaimer">
            <p>
              This website is intended for business-to-business communication
              only. Nexor Commerce LLC does not sell products directly through
              this website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
