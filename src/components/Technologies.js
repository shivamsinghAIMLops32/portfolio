import React, { useState } from 'react';
import './Technologies.css'; // Style for Technologies component

const Technologies = () => {
  const [technologies, setTechnologies] = useState([
    { name: 'MongoDB', project: 'E-commerce App' },
    { name: 'React', project: 'Personal Portfolio' },
    { name: 'Node.js', project: 'Real-time Chat App' },
  ]);

  const addTechnology = () => {
    setTechnologies([...technologies, { name: 'New Tech', project: 'New Project' }]);
  };

  return (
    <section id="technologies" className="technologies">
      <h2>Technologies & Projects</h2>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <strong>{tech.name}:</strong> {tech.project}
          </li>
        ))}
      </ul>
      <button onClick={addTechnology}>Add New Technology</button>
    </section>
  );
};

export default Technologies;
