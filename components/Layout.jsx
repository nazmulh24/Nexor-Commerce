import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ title, children }) {
  const siteTitle = title ? `${title} — NEXOR` : "NEXOR — Nexor Commerce LLC";
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <div className="logo" aria-label="Nexor Commerce logo">
            <Link href="/">
              <img src="/logo.jpeg" alt="NEXOR COMMERCE" className="logo-img" />
            </Link>
          </div>
          <nav className="nav" aria-label="Main navigation">
            <ul>
              <li>
                <Link
                  href="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className={`nav-link ${
                    isActive("/our-services") ? "active" : ""
                  }`}
                  aria-current={isActive("/our-services") ? "page" : undefined}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/why-nexor"
                  className={`nav-link ${
                    isActive("/why-nexor") ? "active" : ""
                  }`}
                  aria-current={isActive("/why-nexor") ? "page" : undefined}
                >
                  Why Nexor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="site-main" id="content">
        {children}
      </main>
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
                  <a
                    href="https://www.amazon.com/stores/NexorCommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Nexor Commerce Amazon Store"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M257.7 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56s-32.3-25.3-32.3-52.8l0-147.1C341.5 89 317 32 229.2 32 141.2 32 94.5 87 94.5 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8l0 40.6zM393.7 413c-7.7 10-70 67-174.5 67S34.7 408.5 10.2 379c-6.8-7.7 1-11.3 5.5-8.3 73.3 44.5 187.8 117.8 372.5 30.3 7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nexor-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Nexor Commerce LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/nexorcommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Nexor Commerce Facebook"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@nexorcommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="YouTube"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-links-section">
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
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
                <h4 className="footer-heading">Contact Us</h4>
                <ul className="footer-menu">
                  <li className="footer-contact-item">
                    <svg
                      className="footer-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:sales@nexorcommerce.com">
                      sales@nexorcommerce.com
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <svg
                      className="footer-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </li>
                  <li className="footer-contact-item">
                    <svg
                      className="footer-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <a
                      href="https://www.google.com/maps/search/Nexor+Commerce+LLC+United+States"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nexor Commerce LLC
                      <br />
                      United States
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {year} Nexor Commerce LLC. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <Link href="/terms">Terms of Service</Link>
              <span className="separator">|</span>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
