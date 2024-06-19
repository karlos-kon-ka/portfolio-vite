import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Botón de hamburguesa visible en pantallas menores a 700px */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Lista de enlaces */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Inicio
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#trabajos"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Trabajos
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Conocimientos
          </motion.a>
        </li>
        <li className="only-mobile">
         
          
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Redes Sociales
            </motion.a>
         
        </li>
      </ul>
    </nav>
  );
}
