import { FiCheckCircle, FiAward } from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { Experience } from "../types";
import "./ExperienceSection.css";

interface ExperienceSectionProps {
  experiences: Experience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const cardRef = useStaggerReveal();

  // Filter out any incomplete entries
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
          <div className="exp-header">
            <h3 className="exp-role">{exp.jobTitle}</h3>
            <p className="exp-company">
              {exp.company} · {exp.startDate} – {exp.endDate}
            </p>
          </div>

          {/* Show top 4 responsibilities as highlights */}
          <div className="exp-highlights">
            {exp.responsibilities.slice(0, 4).map((item, i) => (
              <div key={i} className="exp-highlight-item">
                <FiCheckCircle className="exp-check-icon" />
                <span>{item.split(",")[0].split(".")[0]}</span>
              </div>
            ))}
          </div>

          {/* Awards section */}
          {exp.achievements && exp.achievements.length > 0 && (
            <div className="exp-awards">
              {exp.achievements.map((achievement, i) => (
                <span key={i} className="exp-award">
                  <FiAward className="exp-award-icon" />{" "}
                  {achievement.split(":")[0]}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default ExperienceSection;
