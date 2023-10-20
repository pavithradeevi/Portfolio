import React from 'react';
import './index.css';
import Home from './routes/Home';

import Skill from './routes/Skill'
import Project from './routes/Project';
import Contact from './routes/Contact';
import Experience from './routes/Experience';
import {Routes,Route} from 'react-router-dom'

function App(){
  return(
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/experience" element={<Experience/>}/>
      
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App;