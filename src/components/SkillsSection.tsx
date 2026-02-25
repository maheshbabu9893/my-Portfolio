import { IconType } from "react-icons";
import {
  FiCode,
  FiLayers,
  FiLayout,
  FiDatabase,
  FiTool,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { SkillCategory } from "../types";
import "./SkillsSection.css";

interface CategoryStyle {
  icon: IconType;
  color: string;
  bg: string;
}

// Each skill category gets its own color and icon
const categoryConfig: Record<string, CategoryStyle> = {
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

const defaultStyle: CategoryStyle = {
  icon: FiCode,
  color: "#a78bfa",
  bg: "rgba(167, 139, 250, 0.1)",
};

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

function SkillsSection({ skillCategories }: SkillsSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.05);
  const cardRef = useStaggerReveal();

  const validCategories = skillCategories.filter(
    (cat) => cat.skills.length > 0,
  );

  return (
    <section id="skills" className="portfolio-section" ref={sectionRef}>
      <p className={`section-subtitle reveal ${isVisible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}
      >
        Skills
      </h2>

      <div className="skills-grid">
        {validCategories.map((category, index) => {
          const style = categoryConfig[category.category] || defaultStyle;
          const Icon = style.icon;

          return (
            <div
              key={index}
              ref={cardRef}
              className="skills-card reveal-scale"
              style={{ transitionDelay: `${0.08 * index}s` }}
            >
              <div className="skills-card-header">
                <span
                  className="skills-icon-wrap"
                  style={{ background: style.bg, color: style.color }}
                >
                  <Icon />
                </span>
                <h3 className="skills-group-title">{category.category}</h3>
              </div>

              <div className="skills-items">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span
                      className="skill-dot"
                      style={{ background: style.color }}
                    />
                    <span className="skill-name">{skill}</span>
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
