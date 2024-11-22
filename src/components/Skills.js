import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  // Initial state with predefined skills
  const [skills, setSkills] = useState([
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Git & GitHub",
    "Prisma ORM",
    "PostgreSQL",
    "Redis Cache",
    "Next.js",
    "TypeScript"
  ]);

  // State for the new skill input
  const [newSkill, setNewSkill] = useState('');
  const [action, setAction] = useState('add');  // State to track whether the user is adding or removing a skill
  const [error, setError] = useState('');  // State for error messages

  // Function to handle adding a new skill
  const addSkill = () => {
    if (newSkill.trim() !== '') {
      if (!skills.includes(newSkill.trim())) {
        setSkills([...skills, newSkill.trim()]); // Add new skill to the list if it doesn't exist
        setNewSkill(''); // Clear the input field after adding
        setError(''); // Clear error message
      } else {
        setError('Skill already exists.');
      }
    }
  };

  // Function to handle removing a skill
  const removeSkill = () => {
    if (newSkill.trim() !== '') {
      const updatedSkills = skills.filter(skill => skill.toLowerCase() !== newSkill.trim().toLowerCase()); // Remove the skill, case insensitive
      if (updatedSkills.length === skills.length) {
        setError('Skill not found.');
      } else {
        setSkills(updatedSkills); // Update the state to remove the skill
        setNewSkill(''); // Clear the input field after removing
        setError(''); // Clear error message
      }
    }
  };

  // Function to handle the action type (add/remove)
  const handleAction = () => {
    if (action === 'add') {
      addSkill(); // Call addSkill if action is "add"
    } else {
      removeSkill(); // Call removeSkill if action is "remove"
    }
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {/* Loop through the skills and apply animation dynamically */}
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // Dynamic delay based on index
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      {/* Input field and button to add or remove a skill */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          style={{
            padding: '10px',
            margin: '0 10px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '200px',
            textAlign: 'center',
          }}
        />
        {/* Add/Remove button */}
        <button
          onClick={handleAction}
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
        >
          {action === 'add' ? 'Add Skill' : 'Remove Skill'}
        </button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      
      {/* Switch between adding and removing skills */}
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => setAction(action === 'add' ? 'remove' : 'add')}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '5px 15px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
        >
          Switch to {action === 'add' ? 'Remove Skill' : 'Add Skill'}
        </button>
      </div>
    </section>
  );
};

export default Skills;
