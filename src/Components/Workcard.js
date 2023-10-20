import "./Workcard.css";
import React from 'react';

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img className="image" src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <h3 className="project-software">Domain: {props.software}</h3>
        <div className="pro-btns">
        {props.source && (
          <a
            href={props.source}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Frontend
          </a>
          )}
          {props.backend && ( // Check if a backend URL is provided
            <a
              href={props.backend}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Backend
            </a>
          )}
          {props.view && ( 
          <a
            href={props.view}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Deployment
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workcard;
