import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const services = [
    {
      title: "UI/UX Design",
      desc: "Short description for UI UX",
      full: "Full details about UI/UX design services..."
    },
    {
      title: "Web Design",
      desc: "Short description for Web Design",
      full: "Full details about Web Design services..."
    },
    {
      title: "Web Development",
      desc: "Short description for Web Dev",
      full: "Full details about Web Development..."
    },
    {
      title: "App Development",
      desc: "Short description for App Dev",
      full: "Full details about App Development..."
    }
  ];

  return (
    <div className="services-section">

      {/* ✅ BLUE HALF CIRCLE */}
      <div className="blue-circle"></div>

      {/* ✅ Floating shapes */}
      <div className="shape d-shape-service"></div>
      <div className="shape u-shape-service"></div>

      <h5>My Expertise</h5>
      <h1 className="widerange">Provide Wide Range of Digital Services</h1>

      <div className="cards">
        {services.map((item, i) => (
          <motion.div
            className="card"
            key={i}

            whileHover={{
              y: -10,
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <span
              className="read-more"
              onClick={() => {
                setOpen(true);
                setContent(item.full);
              }}
            >
              Read More
            </span>
          </motion.div>
        ))}
      </div>

      {/* ✅ MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Details</h2>
            <p>{content}</p>

            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}