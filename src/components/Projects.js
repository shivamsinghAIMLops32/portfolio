import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>A backend todo application built with the express,nodejs,prismaorm,docker stack.</p>
        <a href="https://github.com/your-github/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>A social media platform with real-time chat functionality using Socket.IO.</p>
        <a href="https://github.com/your-github/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
