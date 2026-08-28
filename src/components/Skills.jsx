const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Flutter",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive UI"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "ASP.NET",
      "REST APIs",
      "JWT",
      "OAuth",
      "2FA",
      "Secure API Development"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "GitHub Actions",
      "CI/CD",
      "NPM",
      "Yarn",
      "Webpack",
      "Postman",
      "IIS Server"
    ]
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "MSSQL",
      "PostgreSQL",
      "Database Design",
      "Performance Tuning"
    ]
  },
  {
    title: "Agile",
    skills: [
      "Agile",
      "Scrum",
      "Sprint Planning",
      "Sprint Reviews",
      "Retrospectives",
      "Scrum Ceremonies"
    ]
  },
  {
    title: "AI Tools",
    skills: [
      "GitHub Copilot",
      "Claude Code",
      "Gemini",
      "Cursor",
      "ChatGPT"
    ]
  }
  ,
  {
    title: "Documentation & QA",
    skills: [
      "Technical Documentation",
      "API Design Docs",
      "Flowcharts / UML",
      "Postman Collections",
      "API Testing",
      "Manual Testing"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-title">
        <p>MY EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;