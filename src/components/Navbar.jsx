import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">


        <div className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;