import React from "react";

const ProjectCard = ({ title, description, tags, deploy, github }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-links">
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            Deploy
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
