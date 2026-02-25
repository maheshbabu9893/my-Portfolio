# Implementation Plan: React Resume Website

## Overview

Build a data-driven, single-page React resume website for Munagapati Mahesh Babu using Vite + React. Implementation proceeds bottom-up: scaffold the project, create the data layer, build each section component, wire everything together in App, add styling and responsive layout, then verify with tests.

## Tasks

- [x] 1. Scaffold Vite + React project and set up project structure
  - Initialize a new Vite project with the React template
  - Create the directory structure: `src/components/`, `src/data/`, `public/`
  - Place the `Maheshbabu_Resume.pdf` file in `public/`
  - Add `scroll-behavior: smooth` to the root CSS
  - Clean up default Vite boilerplate (remove default App content, logos, etc.)
  - _Requirements: 9.1_

- [x] 2. Create the resume data file
  - [x] 2.1 Create `src/data/resumeData.js` with the full resume data object
    - Include `personal`, `contact`, `experience`, `education`, `skills`, `projects`, and `resumePdfUrl` fields
    - Populate with Mahesh Babu's actual resume content (name, title, location, summary, work experience at Intellect Design Arena, education at Chennai Institute of Technology, all skill categories, VibeChatly project, two null placeholders)
    - Export as default
    - _Requirements: 9.1, 9.2, 9.4_

  - [ ]\* 2.2 Write property test for resume data schema validation
    - **Property 12: Resume data schema contains all required fields**
    - **Validates: Requirements 9.2**

- [x] 3. Implement Navbar component
  - [x] 3.1 Create `src/components/Navbar.jsx` and `src/components/Navbar.css`
    - Accept `ownerName` and `sections` props
    - Render owner name as a home link on the left
    - Render one anchor link per section ID with `href="#sectionId"`
    - Use `position: sticky; top: 0` for fixed positioning
    - Implement hamburger menu toggle with local `useState` for viewports below 768px
    - Use semantic `<nav>` element
    - Ensure all links are keyboard-navigable
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 8.2, 10.1, 10.4_

  - [ ]\* 3.2 Write property test for Navbar link rendering
    - **Property 1: Navbar renders links for all sections and owner name**
    - **Validates: Requirements 1.1, 1.4**

- [x] 4. Implement HeroSection component
  - [x] 4.1 Create `src/components/HeroSection.jsx` and `src/components/HeroSection.css`
    - Accept `name`, `title`, `summary`, `profilePhoto`, and `resumePdfUrl` props
    - Render name in an `<h1>` tag
    - Render title and summary paragraph
    - Conditionally render profile photo `<img>` with alt text only when `profilePhoto` is non-null
    - Render "Download Resume" button/link pointing to `resumePdfUrl` with `download` attribute
    - Wrap in `<section id="about">`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 10.1, 10.2, 10.3, 11.1, 11.2, 11.3_

  - [ ]\* 4.2 Write property test for HeroSection personal data rendering
    - **Property 2: Hero section renders all personal data fields**
    - **Validates: Requirements 2.1, 2.2, 2.3**

  - [ ]\* 4.3 Write property test for conditional profile photo rendering
    - **Property 3: Conditional profile photo rendering**
    - **Validates: Requirements 2.4**

- [x] 5. Implement ExperienceSection component
  - [x] 5.1 Create `src/components/ExperienceSection.jsx` and `src/components/ExperienceSection.css`
    - Accept `experiences` array prop
    - Filter out entries missing `jobTitle` or `company`
    - Render each valid entry with job title, company, location, dates, responsibilities list, and optional achievements
    - Use `<section id="experience">` with `<h2>` heading
    - Maintain logical heading hierarchy (h2 for section, h3 for each entry)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 10.1, 10.3_

  - [ ]\* 5.2 Write property test for experience entry rendering
    - **Property 4: Experience entries render all fields**
    - **Validates: Requirements 3.1, 3.2, 3.3**

  - [ ]\* 5.3 Write property test for invalid experience filtering
    - **Property 5: Invalid experience entries are filtered out**
    - **Validates: Requirements 3.4**

- [x] 6. Implement EducationSection component
  - [x] 6.1 Create `src/components/EducationSection.jsx` and `src/components/EducationSection.css`
    - Accept `education` array prop
    - Render degree, institution, and graduation year for each entry
    - Conditionally render GPA, honors, and coursework when provided
    - Use `<section id="education">` with `<h2>` heading
    - _Requirements: 4.1, 4.2, 4.3, 10.1, 10.3_

  - [ ]\* 6.2 Write property test for education required fields
    - **Property 6: Education entries render required fields**
    - **Validates: Requirements 4.1, 4.2**

  - [ ]\* 6.3 Write property test for optional education details
    - **Property 7: Optional education details render conditionally**
    - **Validates: Requirements 4.3**

- [x] 7. Checkpoint - Verify core sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Implement SkillsSection component
  - [x] 8.1 Create `src/components/SkillsSection.jsx` and `src/components/SkillsSection.css`
    - Accept `skillCategories` array prop
    - Filter out categories with empty `skills` arrays
    - Render each category with a heading and its skill items
    - Use `<section id="skills">` with `<h2>` heading
    - _Requirements: 5.1, 5.2, 5.3, 10.1, 10.3_

  - [ ]\* 8.2 Write property test for skill categories rendering
    - **Property 8: Skill categories render with heading and items**
    - **Validates: Requirements 5.1, 5.2**

  - [ ]\* 8.3 Write property test for empty skill category omission
    - **Property 9: Empty skill categories are omitted**
    - **Validates: Requirements 5.3**

- [x] 9. Implement ProjectsSection component
  - [x] 9.1 Create `src/components/ProjectsSection.jsx` and `src/components/ProjectsSection.css`
    - Accept `projects` array and `maxProjects` (default 3) props
    - Render up to `maxProjects` card slots
    - For filled projects: display title, description, tech stack tags, and live/github links
    - For empty/null slots: render "Coming Soon" placeholder cards
    - Live links open in new tab with `target="_blank" rel="noopener noreferrer"`
    - First project must be VibeChatly with link to https://vibechatly.netlify.app/
    - Use `<section id="projects">` with `<h2>` heading
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 10.1_

  - [ ]\* 9.2 Write property test for project cards and placeholder rendering
    - **Property 10: Project cards render with correct data and placeholder slots**
    - **Validates: Requirements 6.1, 6.2, 6.4, 6.5**

- [x] 10. Implement ContactSection component
  - [x] 10.1 Create `src/components/ContactSection.jsx` and `src/components/ContactSection.css`
    - Accept `email`, `phone`, `links` array, and `resumePdfUrl` props
    - Render email as `mailto:` link
    - Render phone as `tel:` link
    - Render social/professional links as clickable icons or buttons
    - Include a "Download Resume" button pointing to `resumePdfUrl`
    - Use `<section id="contact">` with `<h2>` heading
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 10.1, 11.1, 11.2, 11.3_

  - [ ]\* 10.2 Write property test for contact link protocols
    - **Property 11: Contact links render with correct protocols**
    - **Validates: Requirements 7.1, 7.2, 7.3**

  - [ ]\* 10.3 Write property test for download button href
    - **Property 14: Download button href matches PDF URL**
    - **Validates: Requirements 11.2**

- [x] 11. Implement Footer component
  - [x] 11.1 Create `src/components/Footer.jsx` and `src/components/Footer.css`
    - Render copyright text with owner name
    - Use semantic `<footer>` element
    - _Requirements: 10.1_

- [x] 12. Wire all components together in App
  - [x] 12.1 Update `src/App.jsx` to import `resumeData` and all section components
    - Import `resumeData` from `src/data/resumeData.js`
    - Define the `sections` array for Navbar
    - Render components in order: Navbar, HeroSection, ExperienceSection, EducationSection, SkillsSection, ProjectsSection, ContactSection, Footer
    - Pass correct data slices as props to each component
    - Wrap sections in a `<main>` element for semantic structure
    - Use `<header>` for Navbar area
    - _Requirements: 9.3, 10.1, 10.3_

  - [ ]\* 12.2 Write property test for image alt text
    - **Property 13: All images have alt text**
    - **Validates: Requirements 10.2**

- [x] 13. Checkpoint - Verify full page renders with all sections
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Add responsive styling and final polish
  - [x] 14.1 Add global styles and CSS variables in `src/index.css`
    - Set up color scheme, typography, spacing variables
    - Add `scroll-behavior: smooth` on `html`
    - Set base font styles and reset defaults
    - _Requirements: 1.2_

  - [x] 14.2 Add responsive breakpoints across all component CSS files
    - Below 768px: stack all sections in single column, collapse Navbar to hamburger
    - 768px and above: use multi-column layouts where suitable (skills grid, project cards row)
    - Ensure content adapts from 320px to 1920px viewport widths
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 15. Final checkpoint - Ensure all tests pass and site renders correctly
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests use `fast-check` with Vitest and React Testing Library
- Checkpoints ensure incremental validation
- The resume PDF file should be placed manually in `public/Maheshbabu_Resume.pdf`
