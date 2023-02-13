import React from "react";

import '../components/style/Project.css'


function Project(props) {
  return (
    <div className="card text-bg-dark size margin">
      
        <img src={props.imageSrc} className="card-img projectCard" alt="..."/>
          <div className="card-img-overlay">
            <a className="textDecoration" href={props.imageHref} target="_blank" rel="noreferrer">
              <h2 className="card-title">{props.imageTitle}</h2>
            </a>
            <a className="textDecoration" href={props.imageGithub} target="_blank" rel="noreferrer">
              <h3>GitHub Repository</h3>
            </a>
              <p className="card-text descriptionText">{props.imageDescription}</p>
          </div>
          
    </div>
  );
}

export default Project;