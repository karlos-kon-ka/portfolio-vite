import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div>
      <footer style={{ padding: '20px', textAlign: 'center', background: '#f1f1f1' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="https://github.com/tu-usuario" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tu-usuario" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>
            LinkedIn
          </a>
        </motion.div>
      </footer>
    </div>
  );
}

