import "./App.css";
import resumeData from "./data/resumeData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Navigation sections shown in the navbar
const navSections = ["about", "experience", "skills", "projects", "education"];

function App() {
  const {
    personal,
    experience,
    skills,
    projects,
    education,
    contact,
    resumePdfUrl,
  } = resumeData;

  return (
    <div className="App">
      <Navbar ownerName={personal.name} sections={navSections} />

      <main>
        <HeroSection
          name={personal.name}
          title={personal.title}
          summary={personal.summary}
          profilePhoto={personal.profilePhoto}
          resumePdfUrl={resumePdfUrl}
        />
        <ExperienceSection experiences={experience} />
        <SkillsSection skillCategories={skills} />
        <ProjectsSection projects={projects} maxProjects={3} />
        <EducationSection education={education} />
        <ContactSection
          email={contact.email}
          phone={contact.phone}
          links={contact.links}
          resumePdfUrl={resumePdfUrl}
        />
      </main>

      <Footer ownerName={personal.name} />
    </div>
  );
}

export default App;
