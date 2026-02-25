// Types for the portfolio resume data

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  summary: string;
  profilePhoto: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  links: ContactLink[];
}

export interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
  gpa?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: (Project | null)[];
  resumePdfUrl: string;
}
