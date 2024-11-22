import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // Initial state with predefined projects
  const [projects, setProjects] = useState([
    { name: 'Project 1', description: 'A backend todo application built with the express, nodejs, prismaorm, docker stack.', url: 'https://github.com/your-github/project1' },
    { name: 'Project 2', description: 'A social media platform with real-time chat functionality using Socket.IO.', url: 'https://github.com/your-github/project2' }
  ]);

  // State for new project details
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectUrl, setNewProjectUrl] = useState('');

  // Function to handle adding a new project
  const addProject = () => {
    if (newProjectName && newProjectDescription && newProjectUrl) {
      setProjects([
        ...projects,
        { name: newProjectName, description: newProjectDescription, url: newProjectUrl }
      ]);
      setNewProjectName(''); // Clear the input fields after adding
      setNewProjectDescription('');
      setNewProjectUrl('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Function to handle removing a project
  const removeProject = (index) => {
    const updatedProjects = projects.filter((project, projectIndex) => projectIndex !== index);
    setProjects(updatedProjects); // Update the state to remove the project
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      
      {/* Render list of projects */}
      {projects.map((project, index) => (
        <div key={index} className="project" style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#3498db' }}>View on GitHub</a>
          {/* Remove button */}
          <button
            onClick={() => removeProject(index)}
            style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'background-color 0.3s ease',
              marginLeft: '10px', // Margin to separate from project text
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Input fields for adding a new project */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          style={{
            padding: '10px',
            margin: '5px',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <textarea
          placeholder="Project Description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
          style={{
            padding: '10px',
            margin: '5px',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            height: '100px',
          }}
        />
        <input
          type="text"
          placeholder="Project URL"
          value={newProjectUrl}
          onChange={(e) => setNewProjectUrl(e.target.value)}
          style={{
            padding: '10px',
            margin: '5px',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
      </div>

      {/* Button to add new project */}
      <button
        onClick={addProject}
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px',
          fontSize: '1.2rem',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
      >
        Add New Project
      </button>
    </section>
  );
};

export default Projects;
