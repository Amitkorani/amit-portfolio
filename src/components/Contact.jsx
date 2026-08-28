import {
  Mail,
  Phone,
  ExternalLink,
  MapPin
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-content">

        <div className="contact-text">

          <h3>
            Have a project in mind?
          </h3>

          <p>
            I'm open to discussing frontend development,
            React.js opportunities and interesting
            technology projects.
          </p>

        </div>

        <div className="contact-details">

          <a href="mailto:amitkorani94@gmail.com">
            <Mail />
            <span>amitkorani94@gmail.com</span>
          </a>

          <a href="tel:+917879220548">
            <Phone />
            <span>+91 78792 20548</span>
          </a>

          <div>
            <MapPin />
            <span>Bhopal, Madhya Pradesh</span>
          </div>

          <a
            href="https://linkedin.com/in/amit-korani-68a7891
            
            
            
            
            
            6"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink />
            <span>LinkedIn Profile</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;