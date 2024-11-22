import React, { useState, useEffect } from 'react';
import '../styles/About.css';  // Ensure the updated About.css is imported

const About = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Set the typing complete state after the animation duration
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 4500); // 4s typing + 0.5s delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className={isTypingComplete ? 'typing-complete' : ''}>
        I am SHIVAM SINGH, a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js, PostgreSQL). 
        I love solving problems and building scalable applications.
      </p>
      <p>
        Check out my work on 
        <a href="https://github.com/shivamsinghAIMLops32" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* GitHub icon from Font Awesome */}
        </a>
      </p>
    </section>
  );
};

export default About;
