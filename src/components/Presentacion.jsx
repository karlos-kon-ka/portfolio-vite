import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import fotomia from '../assets/avatar.webp'

export default function Presentacion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    open: { height: 'auto' },
    closed: { height: 70 }, 
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20},
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <motion.div
        layout
        onClick={toggleOpen}
        className='boton-grande'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={containerVariants}
      >
        <motion.h1 style={{ marginBottom: 0 }}>¿Quién Soy?</motion.h1>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key='content'
              initial='closed'
              animate='open'
              exit='closed'
              variants={itemVariants}
              style={{ marginTop: '1rem' }}
            >
              <motion.img className='foto' src={fotomia} />
              <motion.p variants={itemVariants}>
                Soy Carlos P. Desarrollador frontend con + de un año de experiencia. <br/>
                Trabajo como freelancer en diversos proyectos, creando interfaces de usuario responsivas y funcionales.   

              </motion.p>
              
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
