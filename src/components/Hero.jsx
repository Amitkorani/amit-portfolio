import { useEffect, useState } from "react";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const codeCards = [
  {
    language: "Frontend + Backend",
    code: `const developer = {
  frontend: [
    "React.js", "JavaScript", "HTML5", "CSS3",
    "Flutter", "Tailwind CSS", "Bootstrap", "Responsive UI"
  ],
  backend: [
    "Node.js", "ASP.NET", "REST APIs", "JWT",
    "OAuth", "2FA", "Secure API Development"
  ]
};`
  },
  {
    language: "Tools + Database",
    code: `const technicalTools = {
  devops: [
    "GitHub Actions", "CI/CD", "NPM", "Yarn",
    "Webpack", "Postman", "IIS Server"
  ],
  database: [
    "MySQL", "MSSQL", "PostgreSQL",
    "Database Design", "Performance Tuning"
  ]
};`
  },
  {
    language: "Agile + AI + QA",
    code: `const workflow = {
  agile: ["Agile", "Scrum", "Sprint Planning",
    "Sprint Reviews", "Retrospectives", "Scrum Ceremonies"],
  ai: ["GitHub Copilot", "Claude Code", "Gemini",
    "Cursor", "ChatGPT"],
  quality: ["Technical Documentation", "API Design Docs",
    "Flowcharts / UML", "Postman Collections",
    "API Testing", "Manual Testing"]
};`
  }
];

function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((currentCard) => (currentCard + 1) % codeCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const card = codeCards[activeCard];

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <motion.p
          className="hero-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Amit Korani</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Web Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Frontend Web Developer with 4+ years of experience
          building scalable, high-performance web applications
          using React.js, JavaScript, Node.js and Flutter.
        </motion.p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary">
            View My Work
            <ArrowRight size={18} />
          </a>

          <a
            href="/amit-portfolio/AMIT_KORANI_CVAug.pdf"
            download="AMIT_KORANI_CV.pdf"
            className="btn btn-secondary"
          >
            Download CV
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://linkedin.com/in/amit-korani-68a78916a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            data-tooltip="LinkedIn profile"
          >
            <ExternalLink />
          </a>

          <a
            href="https://github.com/Amitkorani"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            data-tooltip="GitHub profile"
          >
            <ExternalLink />
          </a>

        </div>

      </div>

      <div className="hero-card">

        <motion.div
          className="code-window"
          key={card.language}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >

          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="code-language">{card.language}</span>
          </div>

          <pre>{card.code}</pre>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;