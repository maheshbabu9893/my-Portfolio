import { FiCheckCircle, FiAward } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./ExperienceSection.css";

function ExperienceSection({ experiences }) {
  const [ref, visible] = useScrollReveal();
  const valid = experiences.filter((e) => e.jobTitle && e.company);
  return (
    <section id="experience" className="portfolio-section" ref={ref}>
      <p className={`section-subtitle reveal ${visible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${visible ? "visible" : ""}`}
      >
        Experience
      </h2>
      {valid.map((exp, i) => (
        <div
          key={i}
          className={`exp-card reveal reveal-delay-2 ${visible ? "visible" : ""}`}
        >
          <div className="exp-header">
            <div>
              <h3 className="exp-role">{exp.jobTitle}</h3>
              <p className="exp-company">
                {exp.company} · {exp.startDate} – {exp.endDate}
              </p>
            </div>
          </div>
          <div className="exp-highlights">
            {exp.responsibilities.slice(0, 4).map((r, j) => (
              <div key={j} className="exp-highlight-item">
                <FiCheckCircle className="exp-check-icon" />
                <span>{r.split(",")[0].split(".")[0]}</span>
              </div>
            ))}
          </div>
          {exp.achievements && exp.achievements.length > 0 && (
            <div className="exp-awards">
              {exp.achievements.map((a, j) => (
                <span key={j} className="exp-award">
                  <FiAward className="exp-award-icon" /> {a.split(":")[0]}
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
