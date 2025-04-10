"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo_jas.png";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // rolando para baixo
        setShowHeader(false);
      } else {
        // rolando para cima
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <Image
        src={Logo}
        alt="Logo Jas"
        width={100}
        height={40}
        className="logo"
      />

      {/* Botão hambúrguer */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navegação */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#sobre" className="navLink" onClick={() => setMenuOpen(false)}>
          Sobre Mim
        </a>
        <a
          href="#servicos"
          className="navLink"
          onClick={() => setMenuOpen(false)}
        >
          Serviços
        </a>
        <a
          href="#projetos"
          className="navLink"
          onClick={() => setMenuOpen(false)}
        >
          Projetos
        </a>
        <a
          href="#depoimentos"
          className="navLink"
          onClick={() => setMenuOpen(false)}
        >
          Depoimentos
        </a>
        <a
          href="#contato"
          className="button"
          onClick={() => setMenuOpen(false)}
        >
          Entre em Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
