const resumeData = {
  personal: {
    name: "Munagapati Mahesh Babu",
    title: "Frontend Developer (Vue.js | React.js)",
    location: "Nellore, Andhra Pradesh, India",
    summary:
      "Frontend Developer with 2 years 10 months of experience building scalable, high-performance web applications using Vue.js (2 & 3) and React.js. Specialized in micro-frontend architecture (Single-SPA), reusable component design, and state management (Pinia, Vuex, Redux Toolkit). Successfully led Vue 2 to Vue 3 migration, delivered real-time dashboards with Server-Sent Events, and implemented enterprise-grade role-based access control. Experienced in optimizing frontend performance and delivering clean, maintainable code in Agile environments. Recognized with company awards for technical excellence and high-quality delivery.",
    profilePhoto: "/projects/profile.jpeg",
  },
  contact: {
    email: "maheshbabumunagapati1@gmail.com",
    phone: "+91 9542282309",
    links: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/mahesh-babu-munagapati",
        icon: "linkedin",
      },
    ],
  },
  experience: [
    {
      jobTitle: "Associate Consultant – Frontend Developer",
      company: "Intellect Design Arena",
      location: "Product: Purple Fabric",
      startDate: "June 2023",
      endDate: "Present",
      responsibilities: [
        "Developed scalable, responsive web applications using Vue.js and React.js within Single-SPA micro-frontend architecture, improving application integration speed by 30%.",
        "Built reusable, maintainable UI component library across critical modules (Expert Agent, Asset Monitor), reducing development effort by 40% and ensuring consistent user experience.",
        "Developed real-time interactive dashboards with live data streaming using Server-Sent Events (SSE), increasing user engagement by 25%.",
        "Led Vue 2 to Vue 3 migration for Document Library module, improving maintainability and achieving 15% faster load times with zero downtime.",
        "Implemented role-based and policy-based access control (RBAC) across application modules, eliminating unauthorized access issues and strengthening application security.",
        "Optimized frontend performance using lazy loading, dynamic imports, and code splitting, reducing initial page load time by 35% and improving Core Web Vitals scores.",
        "Integrated RESTful APIs with error handling, managed asynchronous data flows, and ensured proper loading state management for optimal user experience.",
        "Participated in code reviews and collaborated with cross-functional teams in Agile/Scrum environment to maintain code quality and share knowledge.",
      ],
      achievements: [
        "On-the-Spot Award (2023-2024): Recognized for successfully migrating a critical Vue 2 module to Vue 3 under tight deadlines with high-quality delivery and zero production incidents.",
        "Spot-Light Award (2024-2025): Honored for implementing role-based and policy-based access control system, significantly strengthening application security across all modules.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering\nComputer Science and Engineering",
      institution: "Chennai Institute of Technology",
      graduationYear: "2019 – 2023",
      gpa: "9.1/10.0",
    },
  ],
  skills: [
    { category: "Languages", skills: ["JavaScript (ES6+)", "TypeScript"] },
    {
      category: "Frontend Frameworks",
      skills: [
        "Vue.js (2 & 3)",
        "React.js",
        "Single-SPA (Micro-Frontend Architecture)",
      ],
    },
    {
      category: "UI Technologies",
      skills: ["HTML5", "CSS3", "Vuetify", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "State Management",
      skills: ["Pinia", "Vuex", "Redux Toolkit"],
    },
    {
      category: "Development Tools",
      skills: ["Vite", "Webpack", "Vitest", "Git", "GitHub", "GitLab", "Jira"],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Server-Sent Events (SSE)",
      ],
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Scrum", "Code Reviews", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "VibeChatly",
      description:
        "A simple AI chat app built with React and Groq AI. Chat with AI, save conversations, and get instant responses. Features include markdown support with code highlighting, dark mode, and conversation history.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Groq API",
        "Llama 3.3 70B",
      ],
      images: [
        "/projects/vibechatly-1.png",
        "/projects/vibechatly-2.png",
        "/projects/vibechatly-3.png",
      ],
      liveUrl: "https://vibechatly.netlify.app/",
      githubUrl: "https://github.com/maheshbabu9893/AI-Assistant-React",
    },
    null,
    null,
  ],
  resumePdfUrl: "/Maheshbabu_Resume.pdf",
};

export default resumeData;
