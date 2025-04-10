"use client";
import React, { useState } from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = [
    "Todos",
    "UX/UI",
    "Web Design",
    "Desenvolvimento Front-end",
    "App Design",
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Meus Projetos</h2>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
