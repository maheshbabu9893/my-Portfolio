import { FiAward, FiZap, FiArrowUpRight } from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { Experience } from "../types";
import "./ExperienceSection.css";

interface ExperienceSectionProps {
  experiences: Experience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const cardRef = useStaggerReveal();

  const validExperiences = experiences.filter(
    (exp) => exp.jobTitle && exp.company,
  );

  return (
    <section id="experience" className="portfolio-section" ref={sectionRef}>
      <p className={`section-subtitle reveal ${isVisible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}
      >
        Experience
      </h2>

      {validExperiences.map((exp, index) => (
        <div
          key={index}
          ref={cardRef}
          className="exp-card reveal"
          style={{ transitionDelay: `${0.15 * index}s` }}
        >
          {/* Header */}
          <div className="exp-header">
            <div className="exp-header-top">
              <div>
                <h3 className="exp-role">{exp.jobTitle}</h3>
                <p className="exp-company">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
              </div>
              <span className="exp-date">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
          </div>

          {/* Impact metrics row */}
          {exp.impact && exp.impact.length > 0 && (
            <div className="exp-impact-row">
              {exp.impact.map((item, i) => (
                <div key={i} className="exp-impact-item">
                  <span className="exp-impact-metric">{item.metric}</span>
                  <span className="exp-impact-label">{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Highlights grid */}
          <div className="exp-highlights">
            {exp.highlights.map((hl, i) => (
              <div key={i} className="exp-hl-card">
                <div className="exp-hl-header">
                  <FiZap className="exp-hl-icon" />
                  <h4 className="exp-hl-title">{hl.title}</h4>
                </div>
                <p className="exp-hl-desc">{hl.description}</p>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          {exp.techUsed && exp.techUsed.length > 0 && (
            <div className="exp-tech-row">
              {exp.techUsed.map((tech, i) => (
                <span key={i} className="exp-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Awards */}
          {exp.achievements && exp.achievements.length > 0 && (
            <div className="exp-awards">
              {exp.achievements.map((achievement, i) => {
                const [title, ...rest] = achievement.split(":");
                const description = rest.join(":").trim();
                return (
                  <div key={i} className="exp-award">
                    <FiAward className="exp-award-icon" />
                    <div>
                      <span className="exp-award-title">{title}</span>
                      {description && (
                        <span className="exp-award-desc"> — {description}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default ExperienceSection;
