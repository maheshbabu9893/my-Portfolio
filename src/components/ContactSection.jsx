import { FiMail, FiPhone, FiLinkedin, FiDownload } from "react-icons/fi";
import { useScrollReveal, useCardReveal } from "../hooks/useScrollReveal";
import "./ContactSection.css";

const linkIconMap = {
  linkedin: {
    icon: FiLinkedin,
    color: "#60a5fa",
    bg: "rgba(96, 165, 250, 0.1)",
  },
};

function ContactSection({ email, phone, links, resumePdfUrl }) {
  const [ref, visible] = useScrollReveal();
  const cards = useCardReveal();
  const linkCount = links ? links.length : 0;
  return (
    <section id="contact" className="portfolio-section" ref={ref}>
      <p className={`section-subtitle reveal ${visible ? "visible" : ""}`}>
        Get in Touch
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${visible ? "visible" : ""}`}
      >
        Contact Me
      </h2>
      <div className="contact-cards">
        <div
          ref={cards.setRef(0)}
          className={`contact-card card-reveal ${cards.isVisible(0) ? "visible" : ""}`}
          style={{ transitionDelay: "0s" }}
        >
          <span
            className="contact-icon-wrap"
            style={{ background: "rgba(239, 68, 68, 0.1)", color: "#f87171" }}
          >
            <FiMail />
          </span>
          <h3 className="contact-label">Email</h3>
          <a href={`mailto:${email}`} className="contact-value">
            {email}
          </a>
        </div>
        <div
          ref={cards.setRef(1)}
          className={`contact-card card-reveal ${cards.isVisible(1) ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span
            className="contact-icon-wrap"
            style={{ background: "rgba(52, 211, 153, 0.1)", color: "#34d399" }}
          >
            <FiPhone />
          </span>
          <h3 className="contact-label">Phone</h3>
          <a href={`tel:${phone}`} className="contact-value">
            {phone}
          </a>
        </div>
        {links &&
          links.map((l, i) => {
            const cfg = linkIconMap[l.icon] || {
              icon: FiLinkedin,
              color: "#60a5fa",
              bg: "rgba(96, 165, 250, 0.1)",
            };
            const Icon = cfg.icon;
            return (
              <div
                key={i}
                ref={cards.setRef(i + 2)}
                className={`contact-card card-reveal ${cards.isVisible(i + 2) ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
              >
                <span
                  className="contact-icon-wrap"
                  style={{ background: cfg.bg, color: cfg.color }}
                >
                  <Icon />
                </span>
                <h3 className="contact-label">{l.label}</h3>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  View Profile
                </a>
              </div>
            );
          })}
      </div>
      <div
        className={`contact-cta reveal reveal-delay-3 ${visible ? "visible" : ""}`}
      >
        <a href={resumePdfUrl} download className="btn btn-filled btn-green">
          <FiDownload className="btn-icon" /> Download CV
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
