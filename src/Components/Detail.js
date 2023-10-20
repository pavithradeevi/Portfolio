import React from 'react';
import "./Detail.css";


// import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";


const Detail = () => {
  return (
    <div>
     
      <div className="contact__container">
        <p>Name:
          <span>Pavithra.V</span>
        </p>
        <p>
          Contact Number :
          <span> 8148867175</span>
        </p>
        <p>
          Email : <span>pavithradeevi@gmail.com</span>
        </p>
        <p>Github : 
          <a href="https://github.com/pavithradeevi" target="_blank"><span style={{color: 'skyblue'}}> Pavithra Kamalakkannan</span> 
          </a>
          
        </p>
        <p>LinkedIn : 
          <a href="https://www.linkedin.com/in/pavithra-v-148533263/" target="_blank"><span style={{color: 'skyblue'}}> Pavithra</span> 
          </a>
          
        </p>
        <p>Biodata : 
          <a href="https://drive.google.com/file/d/1cw0yRxrhxnXUI7-RvBMhG6vkEwodmiEO/view?usp=sharing" target="_blank"><span style={{color: 'skyblue'}}> Resume</span> 
          </a>
          
        </p>
        
      </div>
      {/* <section className='talk' id="Contact"  >
      
        <div class="container" >
          <h1>Let's Talk</h1>
          <br/>
          <p>Feel Free to reach Me</p>
          <form target="_blank" action="https://formsubmit.co/el/vusoju" method="POST" className='inputs' >
            <input type="text" name="Name" placeholder="Name " required />
            <input type="email" name="Email" placeholder="Email" required />
            <input type="text" name="Subject" placeholder="Subject" required />
            <textarea name="Message"  placeholder="Message" required></textarea>
            <input type="submit" value="Submit" class="btn btn-primary "  />
          </form>
          
        </div>
      
    </section> */}
    </div>
  )
}

export default Detail
