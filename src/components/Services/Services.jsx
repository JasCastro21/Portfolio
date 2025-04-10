import React from "react";
import Image from "next/image";
import "./Service.css";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Serviços</h2>

      <div className="service-row">
        <div className="service-card">
          <Image src="/icons/uxui.svg" alt="UX/UI" width={60} height={60} />
          <h3>UX/UI</h3>
          <p>
            Transformo ideias em interfaces intuitivas e atraentes, crio layouts
            funcionais, melhoro a experiência do usuário e desenvolvo protótipos
            interativos.
          </p>
        </div>

        <div className="service-card">
          <Image
            src="/icons/webdesing.svg"
            alt="Web Design"
            width={60}
            height={60}
          />
          <h3>Web Design</h3>
          <p>
            Desenvolvo interfaces intuitivas, alinhadas à identidade da marca e
            otimizadas para uma navegação fluida em qualquer dispositivo.
          </p>
        </div>

        <div className="service-card">
          <Image
            src="/icons/appdesign.svg"
            alt="App Design"
            width={60}
            height={60}
          />
          <h3>App Design</h3>
          <p>
            Desenvolvo designs intuitivos e modernos para apps, garantindo uma
            experiência fluida e envolvente.
          </p>
        </div>
      </div>

      <div className="service-row bottom-row">
        <div className="service-card">
          <Image
            src="/icons/landingpage.svg"
            alt="Landing Page"
            width={60}
            height={60}
          />
          <h3>Criação de Landing Page</h3>
          <p>
            Desenvolvo landing pages modernas e estratégicas para converter
            visitantes em clientes. Foco em design atraente, navegação intuitiva
            e experiência eficiente.
          </p>
        </div>

        <div className="service-card">
          <Image
            src="/icons/frontend.svg"
            alt="Front-End"
            width={60}
            height={60}
          />
          <h3>Desenvolvimento Front-End</h3>
          <p>
            Transformo designs em código funcional, garantindo uma experiência
            fluida e otimizada em qualquer dispositivo.
          </p>
        </div>
      </div>
    </section>
  );
}
