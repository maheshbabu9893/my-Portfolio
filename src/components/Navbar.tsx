import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  ownerName: string;
  sections: string[];
}

function Navbar({ ownerName, sections }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstName = ownerName.split(" ").slice(-2)[0].toLowerCase();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#" className="nav-logo" onClick={scrollToTop}>
          {firstName}
          <span className="nav-logo-dot">.</span>
        </a>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu${menuOpen ? " active" : ""}`}>
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => setMenuOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-hire-btn"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
