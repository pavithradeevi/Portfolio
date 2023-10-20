import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Skillset from '../Components/Skillset';



const Skill = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SKILLSET" text="I enjoy diving into and learning new things. Here's a list of technologies I've worked with"/>
      <Skillset/>
      
      
      <Footer/>
    </div>
  )
}

export default Skill;
