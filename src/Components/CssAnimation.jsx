import React, { useState } from 'react'
import './CssAnimation.css'
function CssAnimation() {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <button onClick={()=>{setIsVisible(!isVisible)}}>Toggle Visibility</button>
      <div className={`fade ${isVisible ? 'show' : ""}`}>This is a fade-in effect</div>
    </div>
  )
}

export default CssAnimation
