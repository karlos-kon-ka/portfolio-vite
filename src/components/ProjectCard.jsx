
import { motion } from 'framer-motion';


const ProjectCard = ({ videoSrc, title, description }) => {
  return (
    <motion.div className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <video className="project-video" src={videoSrc} controls />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </motion.div>
  );
}

export default ProjectCard;