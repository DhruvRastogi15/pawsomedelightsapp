import "./styles/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        One Bowl At A Time - Feeding Strays With Every Order →
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">PAWSOME DELIGHTS</div>

          {/* Navigation */}
          <nav className="nav">
            <Link href="/" className="active">Home</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About Us</Link>
            <Link href="/mission">Our Mission</Link>
            <Link href="/why-us">Why choose us?</Link>
            <Link href="/community">Community</Link>
            <Link href="/impact">Impact</Link>
          </nav>

          {/* Icons (placeholder for now) */}
          <div className="header-icons">
            <span>🔍</span>
            <span>👤</span>
            <span>🛍️</span>
          </div>
        </div>
      </header>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        Exclusive Discounts on Combos are Live!! →
      </div>
    </>
  );
}
