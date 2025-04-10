"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo_jas.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        src={Logo}
        alt="Logo Jas"
        width={120}
        height={48}
        className="footer-logo"
      />

      <p className="footer-email">jasminecastro3@gmail.com</p>

      <div className="footer-socials">
        <a
          href="https://wa.link/fs09tv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/jasmine-castro-1b8974224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/JasCastro21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <nav className="footer-nav">
        <a href="#sobre">Sobre Mim</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#contato">Entre em Contato</a>
      </nav>

      <p className="footer-copy">
        © {new Date().getFullYear()} Jas. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
