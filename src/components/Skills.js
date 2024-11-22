import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {/* Animating each skill item */}
        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.5 }} 
        >
          MongoDB
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }} 
        >
          Express.js
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.5 }} 
        >
          React.js
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.5 }} 
        >
          Node.js
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.5 }} 
        >
          Git & GitHub
        </motion.li>

        {/* New skills with animation */}
        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.5 }} 
        >
          Prisma ORM
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.5 }} 
        >
          PostgreSQL
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9, duration: 0.5 }} 
        >
          Redis Cache
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.0, duration: 0.5 }} 
        >
          Next.js
        </motion.li>

        <motion.li 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.1, duration: 0.5 }} 
        >
          TypeScript
        </motion.li>
      </ul>
    </section>
  );
};

export default Skills;
