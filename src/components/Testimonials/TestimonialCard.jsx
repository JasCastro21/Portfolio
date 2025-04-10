import React from "react";
import "./testimonials.css";

const TestimonialCard = ({ text, name, image }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-footer">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="testimonial-image"
        />
        <span className="testimonial-name">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
