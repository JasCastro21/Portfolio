import Image from "next/image";
import JasPhoto from "../../assets/ft_jasmine.png";

import "./About.css";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <Image src={JasPhoto} alt="Jas" fill className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="about-title">Sobre Mim</h2>
          <h3 className="about-subtitle">Oii eu sou &lt;Jas/&gt;mine Castro</h3>
          <p className="about-description">
            Sou formada em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> e atualmente
            curso <strong>Ciências da Computação</strong>. Tenho experiência com{" "}
            <strong>UX/UI Design</strong> e desenvolvimento{" "}
            <strong>Front-End</strong>, sempre focada em criar{" "}
            <strong>interfaces intuitivas</strong> e funcionais. Também estou
            aprofundando meus conhecimentos em desenvolvimento mobile e outras
            linguagens de programação, assim como outros frameworks, com o
            objetivo de criar soluções completas e eficientes para plataformas{" "}
            <strong>web</strong> e <strong>móveis</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
