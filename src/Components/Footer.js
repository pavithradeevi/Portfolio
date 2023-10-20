import "./Footer.css";

import React from 'react';
import {FaHome,FaPhone,FaMailBulk,FaGithub, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                    <div>
                        <p>106B,Aswath Nagar,</p>
                        <p>Near Ramaiah College Road,</p>
                        <p>Bangalore-560094</p>
                    </div>

                </div>
                <div className="phone">
                    <h4>

                <FaPhone size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                 8148867175
                    </h4>

                </div>
                <div className="email">
                    <h4>

                <FaMailBulk size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                 pavithradeevi@gmail.com
                    </h4>



                </div>
                <div><h4>
                <FaGithub size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                <a href="https://github.com/pavithradeevi" target="_blank">
                Pavithra Kamalakkannan
                </a></h4>
                </div>
                
                <div><h4>
                <FaLinkedin size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                <a href="https://www.linkedin.com/in/pavithra-v-148533263/" target="_blank">
                Pavithra
                </a></h4>
                </div>

            </div>
            <div className="right">
                <h4>About</h4>
                <p>I am looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the organization's growth and to enhance my knowledge about new and emerging trends in the IT sector.</p>
                <div className="social">
                {/* <FaFacebook size={30} style={{color:"whitesmoke",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"whitesmoke",marginRight:"1rem"}}/> */}
                {/* <FaLinkedin size={30} style={{color:"whitesmoke",marginRight:"1rem"}} /> */}
                
                

                </div>

            </div>

        </div>
     
    </div>
  )
}

export default Footer
