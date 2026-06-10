import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
 
  const [showAll, setShowAll] = useState(false)


  const skills = [
    { name: "Graphic Design", percent: 75, color: "#ff9c1a" },
    { name: "Web Designing", percent: 95, color: "#6c63ff" },
    { name: "Branding Design", percent: 85, color: "#48c9b0" },
    { name: "Web Development", percent: 80, color: "#2d2e4a" },
  ];

  return (
    <div className="skills-section">

  {/* ✅ LEFT SECTION */}
  <motion.div
    className="skills-left"
    initial={{ x: -220, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >

    {skills.map((item, i) => (
      <div
        key={i}
        className={`skill-card ${i % 2 !== 0 ? "down" : ""}`}
      >
        <div
          className="circle"
          style={{
            background: `conic-gradient(${item.color} ${item.percent * 3.6}deg, #e9edf5 0deg)`
          }}
        >
          <div className="inner-circle">
            <span style={{ color: item.color }}>
              {item.percent}%
            </span>
          </div>
        </div>

        <p>{item.name}</p>
      </div>
    ))}

    {/* ✅ SEE MORE BUTTON */}
    {!showAll && (
      <div className="see-more-wrapper">
        <button
          className="see-more-btn"
          onClick={() => setShowAll(true)}
        >
          →
        </button>
      </div>
    )}

  </motion.div>

  {/* ✅ RIGHT SECTION */}
  <motion.div
    className="skills-right"
    initial={{ x: 220, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h5>My Skills</h5>

    <h2>
      Beautiful & Unique <br /> Digital Experiences
    </h2>

    <p>
      Nostr ullam laboriosam nisi ut aliquip ex ea commodo consequat.
    </p>

    <button className="cv-btn">
      Download CV
    </button>
  </motion.div>

  {/* other elements same */}
  <div className="half-circle"></div>
  <div className="d-shape-skill"></div>
  <div className="u-shape-skill"></div>

</div>

  );
}