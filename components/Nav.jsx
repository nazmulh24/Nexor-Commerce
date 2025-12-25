import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/why-nexor", label: "Why Nexor" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`nav-link ${isActive(href) ? "active" : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
