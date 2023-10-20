import React from 'react';
import "./Exp.css";
import ExperienceBox from './ExperienceBox';

const Exp = () => {
  return (
    <div className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <ExperienceBox
          number="5+"
          title="Projects"
          style={{ fontSize: '16px' }} // Adjust the font size here
        />
        <ExperienceBox
          title="Currently working on Junior Software Developer"
          number="Mobile App"
          style={{ fontSize: '13px', backgroundColor: "#DC7633" }} // Adjust the font size and background color here
        />
        <ExperienceBox
          number="2+"
          title="Years Teaching & Career Counselling"
          style={{ fontSize: '14px' }} // Adjust the font size here
        />
        <ExperienceBox
          number="1+"
          title="Years Freelancer for Application Engineer"
          style={{ fontSize: '14px' }} // Adjust the font size here
        />
      </div>
    </div>
  );
}

export default Exp;
