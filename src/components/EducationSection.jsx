import { FiBookOpen, FiMapPin, FiCalendar, FiStar } from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import "./EducationSection.css";

function ScoreRing({ value, max }) {
  const pct = Math.round((value / max) * 100);
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="score-ring">
      <svg width="108" height="108" viewBox="0 0 108 108">
        <circle
          cx="54"
          cy="54"
          r={r}
          fill="none"
          stroke="#1e293b"
          strokeWidth="7"
        />
        <circle
          cx="54"
          cy="54"
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 54 54)"
          className="score-ring-progress"
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      <div className="score-ring-text">
        <span className="score-ring-value">{pct}%</span>
        <span className="score-ring-label">Score</span>
      </div>
    </div>
  );
}

function EducationSection({ education }) {
  const [ref, visible] = useScrollReveal(0.1);
  const cardRef = useStaggerReveal();
  return (
    <section id="education" className="portfolio-section" ref={ref}>
      <p className={`section-subtitle reveal ${visible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${visible ? "visible" : ""}`}
      >
        Education
      </h2>
      <div className="edu-cards">
        {education.map((e, i) => {
          const gpaVal = e.gpa ? parseFloat(e.gpa.split("/")[0]) : null;
          const gpaMax = e.gpa ? parseFloat(e.gpa.split("/")[1]) : null;
          return (
            <div
              key={i}
              ref={cardRef}
              className="edu-card reveal"
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              <div className="edu-left">
                <div className="edu-icon-wrap">
                  <FiBookOpen />
                </div>
                <h3 className="edu-degree">{e.degree}</h3>
                <div className="edu-meta">
                  <span className="edu-meta-item">
                    <FiMapPin className="edu-meta-icon" /> {e.institution}
                  </span>
                  <span className="edu-meta-item">
                    <FiCalendar className="edu-meta-icon" /> {e.graduationYear}
                  </span>
                </div>
                {gpaVal && (
                  <div className="edu-gpa-row">
                    <FiStar className="edu-gpa-star" />
                    <span className="edu-gpa-text">{gpaVal} CGPA</span>
                  </div>
                )}
              </div>
              {gpaVal && gpaMax && (
                <div className="edu-right">
                  <ScoreRing value={gpaVal} max={gpaMax} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EducationSection;
