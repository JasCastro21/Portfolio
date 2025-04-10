"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonials";
import "./testimonials.css";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = isMobile
    ? [testimonials[activeIndex]]
    : testimonials;

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Depoimentos</h2>

      <div className="testimonials-container">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      {isMobile && (
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
