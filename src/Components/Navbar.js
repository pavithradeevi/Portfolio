import "./Navbar.css";

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
    // only visible sidebars when click the hamburger 
    // so we use in useState in functional componenet

    const [click,setClick]=useState(false);
    const handleClick=()=> setClick(!click);

    const [color,setColor]=useState(false);
    const changecolor=()=>{
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll",changecolor);

  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click? "menu active" :"menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        {/* <li>
            <Link to="/about">About</Link>
        </li> */}
        <li>
            <Link to="/skill">Skills</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {/* close the hamburger symbol in small screen in fatimes */} 
        {click ? 
        (<FaTimes size={25} style={{color:"whitesmoke"}}/>) :
        ( <FaBars size={25} style={{color:"whitesmoke"}}/>)}
        
        
        
      </div>
    </div>
  )
}

export default Navbar
