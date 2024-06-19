import React from 'react'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import images from '../images'



export default function Intro() {
    const [width, setWidth] = useState(0)
  const carousel = useRef()


  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

  }, [] )
  return (
    <div id='intro' >
        
    <motion.div id='barrio' ref={carousel} className='carousel'
    initial={{
        opacity: 0.3,
        y:0
    }}  
    animate={{
      y:40,
      opacity:1,
      delay:0.5
  }}

    transition={{
      duration:1.4
    }}
   
    
    >

      <motion.div drag="x"  dragConstraints={{
        
        right: 0,
        left: -width 
      }} className='inner-carousel' >
        {images.map(images  => {
          return(
            <motion.div className='item' key={images} >
              <img src={images} alt='image' />
            </motion.div>
          )
        })}
        

      </motion.div>
      
      
    </motion.div>

   <div>
    


    <motion.h2 id='frontend'
    initial={{
        y: 100,
        scale:0.7
        
    }}
    animate={{
        y:0,
    }}
    transition={{
        duration:1.5,
        delay:0.3
    }}
    whileHover={{
        scale:1,
       
    }}
    >
        FRONTEND DEVELOPER
    </motion.h2>
    
   </div>
   
      
    </div>
  )
}
