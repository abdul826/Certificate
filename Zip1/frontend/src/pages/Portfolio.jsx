import { motion } from "framer-motion";
import { useState } from "react"
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import Testimonials from "./Testimonials";

export default function Portfolio() {
    const [selected, setSelected] = useState(null);

  const cards = [
    {
      title: "Application UI Design",
      desc: "Dolor repellendus temporibus.",
      img: i1,
      big: true,
    },
    {
      title: "Web Design",
      desc: "Creative modern layouts",
      img: i2,
    },
    {
      title: "Mobile App",
      desc: "Clean UI experience",
      img: i3,
    },
    {
      title: "Brand Identity",
      desc: "Awesome branding idea",
      img: i4,
    },
  ];

  
return (
    <div className="portfolio-section">

      {/* ✅ TOP SECTION */}
      <div className="portfolio-top">
        <h5>Creative Works</h5>
        <h1>Check My Portfolio</h1>
      </div>

      {/* ✅ CARDS */}
      <div className="portfolio-cards">

        {cards.map((item, i) => (
          <motion.div
            key={i}
            className={`portfolio-card ${item.big ? "big" : ""}`}

            initial={{ y: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            
            <img src={item.img} alt="" />

            {/* ✅ HOVER OVERLAY */}
            <div className="card-overlay">
              <div className="left">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              {/* ✅ CLICK BUTTON */}
              <div
                className="right"
                onClick={() => setSelected(item)}
              >
                →
              </div>
            </div>

          </motion.div>
        ))}

      </div>

      {/* ✅ ✅ MODAL */}
      {selected && (
        <div
          className="modal-overlay"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}

            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >

            {/* ✅ CLOSE BUTTON */}
            <div
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </div>

            <img src={selected.img} alt="" />

            <h2>{selected.title}</h2>

            <p>
              {selected.desc} <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

          </motion.div>
        </div>
      )}

    <Testimonials />
    </div>
  );
}