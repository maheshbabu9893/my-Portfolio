import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import "./HeroSection.css";

interface FloatingIcon {
  src: string;
  label: string;
  top: string;
  left: string;
  delay: string;
  dur: string;
}

// Tech icons that float around the profile photo
const floatingIcons: FloatingIcon[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    label: "React",
    top: "-5%",
    left: "75%",
    delay: "0s",
    dur: "4s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    label: "Vue.js",
    top: "8%",
    left: "-5%",
    delay: "1s",
    dur: "5s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    label: "TypeScript",
    top: "80%",
    left: "-2%",
    delay: "0.5s",
    dur: "4.5s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    label: "Vite",
    top: "85%",
    left: "80%",
    delay: "2s",
    dur: "3.5s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind",
    top: "-8%",
    left: "25%",
    delay: "1.5s",
    dur: "5.5s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    label: "Node.js",
    top: "45%",
    left: "92%",
    delay: "0.8s",
    dur: "4.2s",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    label: "HTML5",
    top: "45%",
    left: "-8%",
    delay: "1.2s",
    dur: "4.8s",
  },
];

interface HeroSectionProps {
  name: string;
  title: string;
  summary: string;
  profilePhoto: string;
  resumePdfUrl: string;
}

function HeroSection({
  name,
  title,
  summary,
  profilePhoto,
  resumePdfUrl,
}: HeroSectionProps) {
  // Show only the first two sentences of the summary
  const shortBio = summary.split(". ").slice(0, 2).join(". ") + ".";
  const firstName = name.split(" ")[0];

  return (
    <section id="about" className="hero">
      {/* Animated background blobs */}
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />
      <div className="hero-shape hero-shape-3" />

      <div className="hero-content">
        {/* Left side — text content */}
        <div className="hero-text">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Frontend Developer
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-highlight">{firstName}</span>
          </h1>
          <p className="hero-role">{title}</p>
          <p className="hero-bio">{shortBio}</p>

          <div className="hero-btns">
            <a href={resumePdfUrl} download className="hero-btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Let's Talk <FiArrowRight />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/maheshbabu9893"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mahesh-babu-munagapati"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Right side — profile photo with floating icons */}
        {profilePhoto && (
          <div className="hero-visual">
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className="hero-float-icon"
                style={{
                  top: icon.top,
                  left: icon.left,
                  animationDelay: icon.delay,
                  animationDuration: icon.dur,
                }}
                title={icon.label}
              >
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="hero-float-icon-img"
                />
              </div>
            ))}
            <div className="hero-photo-glow" />
            <div className="hero-photo-border">
              <img src={profilePhoto} alt={name} className="hero-photo" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
