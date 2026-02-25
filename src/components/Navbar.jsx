import { useState } from "react";
import "./Navbar.css";

function Navbar({ ownerName, sections }) {
  const [open, setOpen] = useState(false);
  const firstName = ownerName.split(" ").slice(-2)[0].toLowerCase();
  return (
    <div className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          {firstName}
          <span className="nav-logo-dot">.</span>
        </a>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-menu${open ? " active" : ""}`}>
          {sections.map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={() => setOpen(false)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="nav-hire-btn"
          onClick={() => setOpen(false)}
        >
          Hire Me
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
