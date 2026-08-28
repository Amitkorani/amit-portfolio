const experiences = [
  {
    role: "Frontend Developer",
    company: "Cylsys Software Solution",
    period: "01/2022 – 04/2026",
    location: "Mumbai, Maharashtra",
    tech: "React.js • ASP.NET • Node.js",
    points: [
      "Delivered scalable and responsive web applications using React.js, ASP.NET and Node.js.",
      "Implemented secure REST APIs and authentication workflows using JWT, encryption and 2FA.",
      "Improved application performance by 40% through UI and API optimization.",
      "Automated CI/CD deployments using GitHub Actions, reducing manual deployment effort by 50%.",
      "Validated REST APIs using Postman and managed project dependencies through NPM.",
      "Performed functional, regression and manual testing while collaborating with QA teams."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Remshare",
    period: "07/2022 – 12/2023",
    tech: "React.js • REST APIs",
    points: [
      "Delivered React.js interfaces for a back-office management application.",
      "Integrated frontend interfaces with REST APIs.",
      "Validated frontend-backend workflows using Postman.",
      "Created technical documentation and coordinated with developers and stakeholders."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    period: "01/ 2022 – 07/ 2022",
    tech: "HTML • CSS • Bootstrap",
    points: [
      "Aria Project — delivered static HTML/CSS templates for integration into an Angular application.",
      "UTI IT Assist Project — built complete frontend using HTML, CSS and Bootstrap and handed off to backend developers.",
      "UTI Tour and Management — developed frontend pages using HTML, CSS and Bootstrap and provided integration-ready templates to backend engineers."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "One View Project",
    period: "01/2023 – 10/2025",
    tech: "ASP.NET • Flutter • Node.js",
    points: [
      "Built the initial UI for an ASP.NET-based web application.",
      "Supported migration from web UI to Flutter for cross-platform delivery.",
      "Created reusable Flutter components and Node.js APIs.",
      "Optimized mobile and web experiences with responsive layouts."
    ]
  },
  {
    role: "Frontend React Developer & Scrum Master",
    company: "JMPro Muthoot Trading Web Application",
    period: "05/2025 – 10/2025",
    tech: "React.js • Mobile Web",
    points: [
      "Converted an existing React.js trading platform into a mobile-responsive web application.",
      "Redesigned mobile interfaces to improve navigation and usability.",
      "Facilitated stand-ups, sprint planning, sprint reviews and retrospectives.",
      "Coordinated Product Owners, developers and QA teams."
    ]
  },
  {
    role: "Flutter Developer",
    company: "Risk Dashboard Project",
    period: "10/2025 – 04/2026",
    tech: "Flutter • AI-Assisted Development",
    points: [
      "Delivered frontend modules for a Flutter-based risk dashboard.",
      "Used AI-assisted development tools to accelerate UI implementation.",
      "Completed responsive UI modules with cloud-integration support.",
      "Focused on reusable components and performance optimization."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-title">
        <p>MY JOURNEY</p>
        <h2>Professional <span>Experience</span></h2>
      </div>

      <div className="timeline">

        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <span className="period">
                  {item.period}
                </span>
              </div>

              <p className="tech">
                {item.tech}
              </p>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;