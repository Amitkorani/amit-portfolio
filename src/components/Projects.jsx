const projects = [
  {
    title: "Risk Dashboard",
    category: "Flutter / AI-Assisted Development",
    description:
      "Responsive Flutter-based risk dashboard frontend with reusable UI architecture and cloud-integration support.",
    tech: ["Flutter", "AI Tools", "Responsive UI"]
  },
  {
    title: "JMPro Muthoot Trading",
    category: "React.js / Mobile Web",
    description:
      "Converted and redesigned an existing React trading platform into a mobile-responsive web application.",
    tech: ["React.js", "JavaScript", "Responsive UI"]
  },
  {
    title: "One View Project",
    category: "Full Stack",
    description:
      "Web and cross-platform application involving ASP.NET UI, Flutter migration and Node.js API integration.",
    tech: ["ASP.NET", "Flutter", "Node.js"]
  },
  {
    title: "Back Office Management",
    category: "React.js",
    description:
      "React.js interface for operational workflows with REST API integration and frontend-backend validation.",
    tech: ["React.js", "REST API", "Postman"]
  }
  ,
  {
    title: "Aria Project",
    category: "Frontend (HTML)",
    description:
      "Provided static HTML/CSS templates (frontend-only) that were integrated into an Angular application by the backend team who added API connectivity.",
    tech: ["HTML", "CSS", "Responsive UI", "Frontend-only"],
    date: "Jan 2022 - Jul 2022"
  },
  {
    title: "UTI IT Assist Project",
    category: "Frontend (Bootstrap)",
    description:
      "Built the complete frontend using HTML, CSS and Bootstrap and delivered it to backend developers for API integration and deployment.",
    tech: ["HTML", "CSS", "Bootstrap", "Responsive UI"],
    date: "Jan 2022 - Jul 2022"
  },
  {
    title: "UTI Tour and Management",
    category: "Frontend (Bootstrap)",
    description:
      "Developed frontend pages using HTML, CSS and Bootstrap for the UTI Tour & Management system and handed them off to backend engineers.",
    tech: ["HTML", "CSS", "Bootstrap", "UI Templates"],
    date: "Jan 2022 - Jul 2022"
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-title">
        <p>WHAT I'VE BUILT</p>
        <h2>Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-number">
              0{projects.indexOf(project) + 1}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            {project.date && (
              <div className="project-date">{project.date}</div>
            )}

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;