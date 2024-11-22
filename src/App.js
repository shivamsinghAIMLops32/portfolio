import React, { useState, useEffect } from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';  // Ensure this is imported
import ThreeDScene from './components/ThreeDScene'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="App">
      <ThreeDScene />
      
      {/* Particles effect */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            links: {
              enable: true,
              color: "#fff",
            },
          },
        }}
      />
      
      {/* Navbar with dark mode toggle */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      {/* Sections of the portfolio */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
