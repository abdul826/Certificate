import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Skills", path: "/skills" },
  { name: "Portfolio", path: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">

      {/* ✅ LOGO */}
      <motion.div
        className="logo"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        FolioFlix
      </motion.div>

      {/* ✅ HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>

      {/* ✅ NAV LINKS */}
      <div className={`nav-links ${open ? "active" : ""}`}>

        {navItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link to={item.path} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          </motion.div>
        ))}

        {/* ✅ CONTACT BUTTON */}
        <motion.button
          className="contact-btn"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: navItems.length * 0.2 }}
        >
          <Link to="/contact" onClick={() => setOpen(false)}>
            Let's Talk
          </Link>
        </motion.button>

      </div>

    </div>
  );
}