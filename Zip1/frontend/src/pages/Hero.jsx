import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { useState } from "react";

export default function Hero() {
  const [startFloat, setStartFloat] = useState(false);

  return (
    <div className="hero">

      {/* ✅ LEFT CONTENT (Left se aayega ek hi baar) */}
      <motion.div
        className="hero-text"
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I Am</h2>

        <h1>
          A <span className="typing">Developer</span>
        </h1>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate.
        </p>

        <div className="buttons">
          <button className="hire">Hire Me</button>
          <button className="work">See My Work</button>
        </div>
      </motion.div>

      
{/* ✅ RIGHT IMAGE */}
      <motion.div
        className="hero-image"

        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}

        onAnimationComplete={() => setStartFloat(true)}
      >
        <motion.img
          src={profileImg}
          alt="profile"

          /* ✅ FLOATING ONLY YAHAN HOGA */
          animate={
            startFloat
              ? { x: [0, 20, 0, -20, 0] }
              : {}
          }

          transition={
            startFloat
              ? {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      </motion.div>


    </div>
  );
}