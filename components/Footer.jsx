import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAmazon,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Amazon",
    href: "https://www.amazon.com/stores/NexorCommerce",
    icon: <FaAmazon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nexor-commerce-llc/",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nexorcommerce/",
    icon: <FaFacebook />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NexorCommerce",
    icon: <FaYoutube />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-section">
            <div className="footer-brand-row">
              <img
                src="/logo.jpeg"
                alt="Nexor Commerce LLC"
                className="footer-logo-img"
              />
              <p className="footer-description">
                Nexor Commerce LLC is a US-based e-commerce and wholesale
                company focused on reliable sourcing and marketplace-driven
                distribution.
              </p>
            </div>
            <div className="footer-social">
              <h3 className="footer-brand-heading">Connect With Us</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-links-section">
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/our-services">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-menu">
                <li className="footer-contact-item">
                  <FaEnvelope className="footer-icon" />
                  <a href="mailto:sales@nexorcommerce.com">
                    sales@nexorcommerce.com
                  </a>
                </li>
                <li className="footer-contact-item">
                  <FaPhone className="footer-icon" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-icon" />
                  <p>
                    Nexor Commerce LLC
                    <br />
                    United States
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Nexor Commerce LLC. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
