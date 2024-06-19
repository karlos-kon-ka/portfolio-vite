// src/ProjectList.js

import React from 'react';
import ProjectCard from './ProjectCard';

import vid from '../assets/vid.mp4'

const projects = [
  {
    videoSrc: vid,
    title: 'Busca Gifs',
    description: '¡Mi propia App para buscar Gifs! Uso de Hooks. useState y useContext. ',
  },
  {
    videoSrc: vid,
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
  },
  {
    videoSrc: vid,
    title: '3 en rayas',
    description: 'Un clásico Tic Tac Toe.',
  },
  {
    videoSrc: vid,
    title: 'Animaciones con THREE.js',
    description: 'Practicas de animaciones simples con Three.',
  },
  {
    videoSrc: vid,
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
  },
 

];

const ProjectList = () => {
  return (
    <div  className="project-list">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          videoSrc={project.videoSrc} 
          title={project.title} 
          description={project.description} 
        />
      ))}
    </div>
  );
}

export default ProjectList;
