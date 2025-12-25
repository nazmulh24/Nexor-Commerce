import Link from "next/link";
import Nav from "./Nav";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="logo" aria-label="Nexor Commerce logo">
          <Link href="/">
            <img src="/logo.jpeg" alt="NEXOR COMMERCE" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <Nav />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMobileMenuOpen ? "active" : ""}`}>
          <Nav />
        </div>
      </div>
    </header>
  );
}
