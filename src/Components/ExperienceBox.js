import React from 'react';
import "./ExperienceBox.css"

const ExperienceBox = ({number,title,style}) => {
  return (
    <div className="experience" style={{...style}}>
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  )
}

export default ExperienceBox
