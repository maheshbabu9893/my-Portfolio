import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import type { Project } from "../types";
import "./ProjectsSection.css";

// Image carousel for project screenshots
function ProjectImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-carousel">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="project-carousel-img"
      />
      {images.length > 1 && (
        <>
          <button
            className="carousel-btn carousel-btn-left"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <button
            className="carousel-btn carousel-btn-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot${i === currentIndex ? " active" : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface ProjectsSectionProps {
  projects: (Project | null)[];
  maxProjects?: number;
}

function ProjectsSection({ projects, maxProjects = 3 }: ProjectsSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal(0.05);
  const cardRef = useStaggerReveal();

  // Pad the array to always show maxProjects slots (empty ones show "Coming Soon")
  const slots = Array.from(
    { length: maxProjects },
    (_, i) => projects[i] || null,
  );

  return (
    <section id="projects" className="portfolio-section" ref={sectionRef}>
      <p className={`section-subtitle reveal ${isVisible ? "visible" : ""}`}>
        Browse My Recent
      </p>
      <h2
        className={`section-title reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}
      >
        Projects
      </h2>

      <div className="projects-grid">
        {slots.map((project, index) =>
          project ? (
            <div
              key={index}
              ref={cardRef}
              className="project-card reveal-scale"
              style={{ transitionDelay: `${0.12 * index}s` }}
            >
              <div className="project-img-wrap">
                {project.images && project.images.length > 0 ? (
                  <ProjectImageCarousel
                    images={project.images}
                    title={project.title}
                  />
                ) : (
                  <div className="project-img-placeholder">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="project-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">
                  {project.description.split(". ").slice(0, 1).join(". ")}.
                </p>
                <div className="project-tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-btns">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      <FiGithub className="btn-icon" /> Github
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
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
              key={index}
              ref={cardRef}
              className="project-card project-card-empty reveal-scale"
              style={{ transitionDelay: `${0.12 * index}s` }}
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
