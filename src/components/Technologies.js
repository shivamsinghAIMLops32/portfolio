import React, { useState } from 'react';
import '../styles/Technologies.css'; // Style for Technologies component

const Technologies = () => {
  // Initial state with predefined technologies
  const [technologies, setTechnologies] = useState([
    { name: 'MongoDB', project: 'E-commerce App' },
    { name: 'React', project: 'Personal Portfolio' },
    { name: 'Node.js', project: 'Real-time Chat App' },
  ]);

  // State to store new technology name and project name
  const [newTechName, setNewTechName] = useState('');
  const [newTechProject, setNewTechProject] = useState('');

  // Function to handle adding new technology
  const addTechnology = () => {
    if (newTechName && newTechProject) {
      setTechnologies([...technologies, { name: newTechName, project: newTechProject }]);
      setNewTechName(''); // Clear input fields after adding
      setNewTechProject('');
    } else {
      alert('Please provide both technology name and project.');
    }
  };

  return (
    <section id="technologies" className="technologies">
      <h2>Technologies & Projects</h2>
      
      {/* List of technologies */}
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <strong>{tech.name}:</strong> {tech.project}
          </li>
        ))}
      </ul>

      {/* Input fields for new technology */}
      <div className="input-fields">
        <input
          type="text"
          placeholder="Technology Name"
          value={newTechName}
          onChange={(e) => setNewTechName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Name"
          value={newTechProject}
          onChange={(e) => setNewTechProject(e.target.value)}
        />
      </div>

      {/* Button to add new technology */}
      <button onClick={addTechnology}>Add New Technology</button>
    </section>
  );
};

export default Technologies;
