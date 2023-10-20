import "./Heroimg.css";

import React from 'react';
import wall  from "../assets/wall.webp";
import {Link} from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={wall} alt="wall"/>

        </div>
        <div className="content">
            <p>Hai, I am </p>
            <h4>PAVITHRA</h4>
            <h1>Full Stack Developer</h1>
            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/pavithra-v-148533263/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
            <div>
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link><button className="btn">CV</button></Link> */}
                {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
                <a href="https://drive.google.com/file/d/1cw0yRxrhxnXUI7-RvBMhG6vkEwodmiEO/view?usp=sharing" target="_blank">
                <button className="btn">Download CV</button>
                </a>
                <a href="https://github.com/pavithradeevi" target="_blank">
                <button className="btn">GitHub</button>
                </a>
                <a href="https://www.linkedin.com/in/pavithra-v-148533263/" target="_blank">
                <button className="btn">LinkedIn</button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Heroimg
