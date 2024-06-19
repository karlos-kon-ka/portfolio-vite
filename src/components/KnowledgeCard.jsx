import React from 'react';
import { motion } from 'framer-motion';


const KnowledgeCard = ({ iconSrc, title, description }) => {
  return (
    <motion.div className="knowledge-card"
      whileHover={{ rotateY: 180 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="knowledge-card-inner">
        <div className="knowledge-card-front">
          <img src={iconSrc} alt={title} className="knowledge-icon" />
          <h3>{title}</h3>
        </div>
        <div className="knowledge-card-back">
        <p className="back-text">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default KnowledgeCard;