import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useScrollReveal, useCardReveal } from "../hooks/useScrollReveal";
import "./ProjectsSection.css";

function ProjectImageCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  return (
    <div className="project-carousel">
      <img
        src={images[idx]}
        alt={`${title} screenshot ${idx + 1}`}
        className="project-carousel-img"
      />
      {images.length > 1 && (
        <>
          <button
            className="carousel-btn carousel-btn-left"
            onClick={prev}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <button
            className="carousel-btn carousel-btn-right"
            onClick={next}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot${i === idx ? " active" : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectsSection({ projects, maxProjects = 3 }) {
  const [ref, visible] = useScrollReveal();
  const cards = useCardReveal();
  const slots = Array.from(
    { length: maxProjects },
    (_, i) => projects[i] || null,
  );
  return (
    <section id="projects" className="portfolio-section" ref={ref}>
      <p className={`section-subtitle reveal ${visible ? "visible" : ""}`}>
        Browse My Recent
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${visible ? "visible" : ""}`}
      >
        Projects
      </h2>
      <div className="projects-grid">
        {slots.map((p, i) =>
          p ? (
            <div
              key={i}
              ref={cards.setRef(i)}
              className={`project-card card-reveal ${cards.isVisible(i) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="project-img-wrap">
                {p.images && p.images.length > 0 ? (
                  <ProjectImageCarousel images={p.images} title={p.title} />
                ) : (
                  <div className="project-img-placeholder">
                    {p.techStack.slice(0, 4).map((t, j) => (
                      <span key={j} className="project-tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">
                  {p.description.split(". ").slice(0, 1).join(". ")}.
                </p>
                <div className="project-btns">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      <FiGithub className="btn-icon" /> Github
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-filled"
                    >
                      <FiExternalLink className="btn-icon" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              key={i}
              ref={cards.setRef(i)}
              className={`project-card project-card-empty card-reveal ${cards.isVisible(i) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="project-img-wrap">
                <div className="project-img-placeholder project-placeholder-empty">
                  <span>✨</span>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-name" style={{ color: "#4a4a4a" }}>
                  Coming Soon
                </h3>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
