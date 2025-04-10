"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Hero.css";
import illustration from "@/assets/illustration.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-area">
          <p className="intro">Oii, eu sou</p>
          <h1 className="name">Jasmine Castro</h1>
          <h2 className="title">
            Freelancer UX/UI Designer e Desenvolvedora Front-End
          </h2>
          <p className="description">
            Com <span>UX/UI Design</span> e <span>Front-End</span>, crio
            interfaces <span>intuitivas</span> e <span>responsivas</span>,
            sempre focando em <span>usabilidade</span> do usuário.
          </p>

          <div className="button-social-wrapper">
            <div className="buttons">
              <a href="#contato" className="btn primary">
                Entre em Contato
              </a>
              <a
                href="/cv.pdf"
                download="Jasmine-Castro-CV.pdf"
                className="btn outlined"
              >
                Download CV
              </a>
            </div>

            <div className="socials inline-icons">
              <a
                href="https://www.linkedin.com/in/jasmine-castro-1b8974224/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} color="#f17c94" />
              </a>
              <a
                href="https://github.com/JasCastro21"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={32} color="#f17c94" />
              </a>
              <a
                href="https://wa.link/fs09tv"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} color="#f17c94" />
              </a>
            </div>
          </div>
        </div>

        <div className="image-area">
          <Image
            src={illustration}
            alt="Ilustração de solução digital"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
