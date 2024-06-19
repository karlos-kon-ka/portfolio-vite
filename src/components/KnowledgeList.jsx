import React from 'react';
import KnowledgeCard from './KnowledgeCard';
import node from '../assets/nodejs-icon.svg'
import react from '../assets/react.svg'
import tail from '../assets/tail.svg'
import bs5 from '../assets/bs5.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const knowledgeItems = [
  {
    iconSrc: node,
    title: 'Node.js',
    description: 'Node.js es un herramienta "básica" para cualquier programador JS, tengo soltura y avanze constanté.',
  },
  {
    iconSrc: react,
    title: 'React',
    description: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.',
  },
  {
    iconSrc: tail,
    title: 'Tailwind',
    description: 'Manejo de Tailwind Css a un nivel intermedio pero con solidez.',
  },
  {
    iconSrc: bs5,
    title: 'Bootstrap',
    description: 'Manejo con fluidez la biblioteca de Bootstrap, con varios proyectos y trabajos encima.',
  },
  
];




export const Title = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Se activa cuando el 10% del componente está visible
  });

  return (
    <motion.h2 
      ref={ref}
      className='title'
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      Conocimientos
    </motion.h2>
  );
};

const KnowledgeList = () => {
  return (
   
    <div className="knowledge-list">
      
      {knowledgeItems.map((item, index) => (
        <KnowledgeCard 
          key={index}
          iconSrc={item.iconSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default KnowledgeList;