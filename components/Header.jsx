import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="logo" aria-label="Nexor Commerce logo">
          <Link href="/">
            <img src="/logo.jpeg" alt="NEXOR COMMERCE" className="logo-img" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}
