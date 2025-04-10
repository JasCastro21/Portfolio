"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./Carousel.css";

const logos = [
  {
    gray: "/logos/bootstrap-cinza.png",
    pink: "/logos/bootstrap-rosa.png",
    alt: "Bootstrap",
  },
  { gray: "/logos/css-cinza.png", pink: "/logos/css-rosa.png", alt: "CSS" },
  {
    gray: "/logos/figma-cinza.png",
    pink: "/logos/figma-rosa.png",
    alt: "Figma",
  },
  {
    gray: "/logos/framer-cinza.png",
    pink: "/logos/framer-rosa.png",
    alt: "Framer",
  },
  { gray: "/logos/html-cinza.png", pink: "/logos/html-rosa.png", alt: "HTML" },
  {
    gray: "/logos/js-cinza.png",
    pink: "/logos/js-rosa.png",
    alt: "JavaScript",
  },
  {
    gray: "/logos/react-cinza.png",
    pink: "/logos/react-rosa.png",
    alt: "React",
  },
  {
    gray: "/logos/tailwind-cinza.png",
    pink: "/logos/tailwind-rosa.png",
    alt: "Tailwind",
  },
  {
    gray: "/logos/trello-cinza.png",
    pink: "/logos/trello-rosa.png",
    alt: "Trello",
  },
  {
    gray: "/logos/wordpress-cinza.png",
    pink: "/logos/wordpress-rosa.png",
    alt: "WordPress",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 2000); // troca a cada 2 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...logos, ...logos].map((logo, index) => {
          const realIndex = index % logos.length;
          const isActive = realIndex === activeIndex;

          return (
            <div
              key={index}
              className={`carousel-icon ${isActive ? "active" : ""}`}
            >
              <div className="logo-wrapper">
                <Image
                  src={logo.gray}
                  alt={logo.alt}
                  width={60}
                  height={60}
                  className="gray-logo"
                />
                <Image
                  src={logo.pink}
                  alt={logo.alt}
                  width={60}
                  height={60}
                  className="pink-logo"
                />
              </div>
              <p className="logo-label">{logo.alt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
