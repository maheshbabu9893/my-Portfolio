import { FiBookOpen, FiMapPin, FiCalendar, FiStar } from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { Education } from "../types";
import "./EducationSection.css";

// Animated circular progress ring for GPA score
function ScoreRing({
  value,
  max,
  id,
}: {
  value: number;
  max: number;
  id: string;
}) {
  const percentage = Math.round((value / max) * 100);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (percentage / 100) * circumference;
  const gradientId = `scoreGrad-${id}`;

  return (
    <div className="score-ring">
      <svg width="108" height="108" viewBox="0 0 108 108">
        {/* Background track */}
        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth="7"
        />
        {/* Progress arc */}
        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          transform="rotate(-90 54 54)"
          className="score-ring-progress"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      <div className="score-ring-text">
        <span className="score-ring-value">{percentage}%</span>
        <span className="score-ring-label">Score</span>
      </div>
    </div>
  );
}

interface EducationSectionProps {
  education: Education[];
}

function EducationSection({ education }: EducationSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const cardRef = useStaggerReveal();

  return (
    <section id="education" className="portfolio-section" ref={sectionRef}>
      <p className={`section-subtitle reveal ${isVisible ? "visible" : ""}`}>
        Explore My
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}
      >
        Education
      </h2>

      <div className="edu-cards">
        {education.map((edu, index) => {
          const gpaValue = edu.gpa ? parseFloat(edu.gpa.split("/")[0]) : null;
          const gpaMax = edu.gpa ? parseFloat(edu.gpa.split("/")[1]) : null;

          return (
            <div
              key={index}
              ref={cardRef}
              className="edu-card reveal"
              style={{ transitionDelay: `${0.15 * index}s` }}
            >
              <div className="edu-left">
                <div className="edu-icon-wrap">
                  <FiBookOpen />
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-meta">
                  <span className="edu-meta-item">
                    <FiMapPin className="edu-meta-icon" /> {edu.institution}
                  </span>
                  <span className="edu-meta-item">
                    <FiCalendar className="edu-meta-icon" />{" "}
                    {edu.graduationYear}
                  </span>
                </div>
                {gpaValue && (
                  <div className="edu-gpa-row">
                    <FiStar className="edu-gpa-star" />
                    <span className="edu-gpa-text">{gpaValue} CGPA</span>
                  </div>
                )}
              </div>

              {gpaValue && gpaMax && (
                <div className="edu-right">
                  <ScoreRing
                    value={gpaValue}
                    max={gpaMax}
                    id={`edu-${index}`}
                  />
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
