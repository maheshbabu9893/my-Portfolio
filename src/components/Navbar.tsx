import { useState, useEffect } from "react";
import "./Navbar.css";

interface NavbarProps {
  ownerName: string;
  sections: string[];
}

function Navbar({ ownerName, sections }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const firstName = ownerName.split(" ").slice(-2)[0].toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";

      for (const section of [...sections, "contact"]) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
              <a
                href={`#${section}`}
                className={activeSection === section ? "nav-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="nav-hire-mobile-item">
            <a
              href="#contact"
              className="nav-hire-mobile"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="nav-hire-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get in Touch
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
