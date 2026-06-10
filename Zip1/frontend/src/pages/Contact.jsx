import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-section">

      {/* ✅ HEADING */}
      <div className="contact-header">
        <h5>Get in Touch</h5>
        <h1 className="contact-heading">
          Any Questions? Feel Free <br /> to Contact
        </h1>
      </div>

      <div className="contact-container">

        {/* ✅ LEFT (Address) */}
        <motion.div
          className="contact-left"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="info">
            <div className="icon">📍</div>
            <div>
              <h4>Address:</h4>
              <p className="address">223K, Nazeerabad Nai Basti Near Makka Masjid,<br/>Satna, Madhya Pradesh, India</p>
            </div>
          </div>

          <div className="info">
            <div className="icon">✉</div>
            <div>
              <h4>Email:</h4>
              <p>info@folioflix.com<br/>folioflix@gmail.com</p>
            </div>
          </div>

          <div className="info">
            <div className="icon">📞</div>
            <div>
              <h4>Phone:</h4>
              <p>+61 3 8376 6284<br/>+800 2345 6789</p>
            </div>
          </div>

        </motion.div>

        {/* ✅ RIGHT (FORM) */}
        <motion.div
          className="contact-right"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <form className="contact-form">

            <div className="row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>

        </motion.div>

      </div>

      {/* ✅ SHAPES */}
      <div className="d-shape-contact"></div>
      <div className="u-shape-contact"></div>

    </div>
  );
}