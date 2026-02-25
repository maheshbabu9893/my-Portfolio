import {
  FiCode,
  FiLayers,
  FiLayout,
  FiDatabase,
  FiTool,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { useScrollReveal, useCardReveal } from "../hooks/useScrollReveal";
import "./SkillsSection.css";

const categoryConfig = {
  Languages: { icon: FiCode, color: "#a78bfa", bg: "rgba(167, 139, 250, 0.1)" },
  "Frontend Frameworks": {
    icon: FiLayers,
    color: "#60a5fa",
    bg: "rgba(96, 165, 250, 0.1)",
  },
  "UI Technologies": {
    icon: FiLayout,
    color: "#22d3ee",
    bg: "rgba(34, 211, 238, 0.1)",
  },
  "State Management": {
    icon: FiDatabase,
    color: "#34d399",
    bg: "rgba(52, 211, 153, 0.1)",
  },
  "Development Tools": {
    icon: FiTool,
    color: "#fbbf24",
    bg: "rgba(251, 191, 36, 0.1)",
  },
  "Backend & APIs": {
    icon: FiServer,
    color: "#f87171",
    bg: "rgba(248, 113, 113, 0.1)",
  },
  Methodologies: {
    icon: FiUsers,
    color: "#c084fc",
    bg: "rgba(192, 132, 252, 0.1)",
  },
};

function SkillsSection({ skillCategories }) {
  const [ref, visible] = useScrollReveal();
  const cards = useCardReveal();
  const valid = skillCategories.filter((c) => c.skills && c.skills.length > 0);
  return (
    <section id="skills" className="portfolio-section" ref={ref}>
      <p className={`section-subtitle reveal ${visible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${visible ? "visible" : ""}`}
      >
        Skills
      </h2>
      <div className="skills-grid">
        {valid.map((cat, i) => {
          const config = categoryConfig[cat.category] || {
            icon: FiCode,
            color: "#a78bfa",
            bg: "rgba(167, 139, 250, 0.1)",
          };
          const Icon = config.icon;
          return (
            <div
              key={i}
              ref={cards.setRef(i)}
              className={`skills-card card-reveal ${cards.isVisible(i) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="skills-card-header">
                <span
                  className="skills-icon-wrap"
                  style={{ background: config.bg, color: config.color }}
                >
                  <Icon />
                </span>
                <h3 className="skills-group-title">{cat.category}</h3>
              </div>
              <div className="skills-items">
                {cat.skills.map((s, j) => (
                  <div key={j} className="skill-item">
                    <span
                      className="skill-dot"
                      style={{ background: config.color }}
                    />
                    <span className="skill-name">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
