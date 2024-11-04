import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function FramerMotion() {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>Toggle Visibility</button>
      {
        isVisible && (
            <motion.div
            initial={{opacity : 0}}
            animate = {{opacity:1}}
            exit = {{opacity:0}}
            transition= {{opacity:0.5}}>This is a Fade Animation with Framer Motion</motion.div>
        )
      }
    </div>
  )
}
