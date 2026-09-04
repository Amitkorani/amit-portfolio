import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
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

        <div className="code-window">

          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
            {`const developer = {
  name: "Amit Korani",
  role: "Frontend Developer",
  experience: "4+ Years",
  stack: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Flutter"
  ],
  focus: "Performance & UI"
};`}
          </pre>

        </div>

      </div>

    </section>
  );
}

export default Hero;