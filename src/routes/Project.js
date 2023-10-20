import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';

import Work from '../Components/Work';




const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" 
      text="Some of My Personal Full Stack & Python Projects"/>
      <Work/>
      
      <Footer/>
    </div>
  )
}

export default Project;
