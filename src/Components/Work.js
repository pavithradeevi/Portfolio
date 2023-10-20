import "./Workcard.css";
import Workcard from "./Workcard";
import Workdata from "./Workdata"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="user-details">

        <h4 className="user-details">User Creditionals:</h4>
        <p>username:test@gmail.com</p>
        <p>password:1234567890</p>
        </div><br/><br/>
        <div className="user-details">

        <h4 className="user-details">Admin Creditionals:</h4>
        <p>username:admin@gmail.com</p>
        <p>password:admin12345</p>
        </div><br/><br/>
        <div className="project-container">
            {Workdata.map((val,index)=>{
                return(
                    <Workcard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    backend={val.backend}
                    software={val.software}
                    />
                )
            })}
            

        </div>
        
        
    </div>
  )
}

export default Work;
