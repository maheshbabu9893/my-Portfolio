import { FiMail, FiPhone, FiLinkedin, FiDownload } from "react-icons/fi";
import { IconType } from "react-icons";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { ContactLink } from "../types";
import "./ContactSection.css";

interface IconConfig {
  icon: IconType;
  color: string;
  bg: string;
}

// Map link types to their icon styles
const linkIconMap: Record<string, IconConfig> = {
  linkedin: {
    icon: FiLinkedin,
    color: "#60a5fa",
    bg: "rgba(96, 165, 250, 0.1)",
  },
};

const defaultLinkStyle: IconConfig = {
  icon: FiLinkedin,
  color: "#60a5fa",
  bg: "rgba(96, 165, 250, 0.1)",
};

interface ContactSectionProps {
  email: string;
  phone: string;
  links: ContactLink[];
  resumePdfUrl: string;
}

function ContactSection({
  email,
  phone,
  links,
  resumePdfUrl,
}: ContactSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const cardRef = useStaggerReveal();

  return (
    <section id="contact" className="portfolio-section" ref={sectionRef}>
      <p className={`section-subtitle reveal ${isVisible ? "visible" : ""}`}>
        Get in Touch
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}
      >
        Contact Me
      </h2>

      <div className="contact-cards">
        {/* Email card */}
        <div
          ref={cardRef}
          className="contact-card reveal-scale"
          style={{ transitionDelay: "0.1s" }}
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

        {/* Phone card */}
        <div
          ref={cardRef}
          className="contact-card reveal-scale"
          style={{ transitionDelay: "0.2s" }}
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

        {/* Social links */}
        {links.map((link, index) => {
          const config = linkIconMap[link.icon] || defaultLinkStyle;
          const Icon = config.icon;

          return (
            <div
              key={index}
              ref={cardRef}
              className="contact-card reveal-scale"
              style={{ transitionDelay: `${0.3 + 0.1 * index}s` }}
            >
              <span
                className="contact-icon-wrap"
                style={{ background: config.bg, color: config.color }}
              >
                <Icon />
              </span>
              <h3 className="contact-label">{link.label}</h3>
              <a
                href={link.url}
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
        className={`contact-cta reveal reveal-delay-4 ${isVisible ? "visible" : ""}`}
      >
        <a href={resumePdfUrl} download className="btn btn-filled btn-green">
          <FiDownload className="btn-icon" /> Download CV
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
