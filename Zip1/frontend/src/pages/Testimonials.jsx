import { useState, useEffect } from "react";


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    { title: "Amazing Work", desc: "Client loved the UI and quality." },
    { title: "Best Experience", desc: "Smooth process and great result." },
    { title: "Highly Recommended", desc: "Professional and on time." },
    { title: "Clean Design", desc: "Modern and attractive UI." },
    { title: "Perfect Delivery", desc: "Everything delivered perfectly." }
  ];

  const total = testimonials.length;

  /* ✅ AUTO SCROLL */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  /* ✅ NEXT */
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  /* ✅ PREV */
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="testimonials-section">

      <h5>Testimonials</h5>
      <h1>Happy Clients Feedback</h1>

      {/* ✅ SLIDER */}
      <div className="testimonial-wrapper">

        <div
          className="testimonial-track"
          style={{
            transform: `translateX(-${index * 50}%)`
          }}
        >
          {/* ✅ duplicate for smooth loop */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <div className="testimonial-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ✅ BUTTONS */}
      <div className="testimonial-controls">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>

      {/* ✅ SHAPES */}
      <div className="half-circle-testimonial"></div>
      <div className="d-shape-testimonial"></div>
      <div className="u-shape-testimonial"></div>

    </div>
  );
}

