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

const sections = ["about", "experience", "skills", "projects", "education"];

function App() {
  return (
    <div className="App">
      <Navbar ownerName={resumeData.personal.name} sections={sections} />
      <main>
        <HeroSection
          name={resumeData.personal.name}
          title={resumeData.personal.title}
          summary={resumeData.personal.summary}
          profilePhoto={resumeData.personal.profilePhoto}
          resumePdfUrl={resumeData.resumePdfUrl}
        />
        <ExperienceSection experiences={resumeData.experience} />
        <SkillsSection skillCategories={resumeData.skills} />
        <ProjectsSection projects={resumeData.projects} maxProjects={3} />
        <EducationSection education={resumeData.education} />
        <ContactSection
          email={resumeData.contact.email}
          phone={resumeData.contact.phone}
          links={resumeData.contact.links}
          resumePdfUrl={resumeData.resumePdfUrl}
        />
      </main>
      <Footer ownerName={resumeData.personal.name} />
    </div>
  );
}

export default App;
