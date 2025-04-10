"use client";

import React from "react";
import Image from "next/image";
import ContactImage from "../../assets/contact-image.png";
import "./contact.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <Image
            src={ContactImage}
            alt="Contato"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="contact-content">
          <h1>Vamos trabalhar juntos no seu novo projeto</h1>
          <p>
            Conte comigo para transformar suas ideias em realidade com um design
            estratégico, moderno e personalizado.
          </p>
          <a
            href="https://wa.link/fs09tv"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
