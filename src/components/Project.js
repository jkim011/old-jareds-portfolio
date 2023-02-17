import React from "react";

import '../components/style/Portfolio.css'
import githubLogo from '../assets/logoImages/githubLogo.png'


function Project(props) {
  return (
    <div className="card text-bg-dark size margin border">
      
        <img src={props.imageSrc} className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <a className="textDecoration" href={props.imageHref} target="_blank" rel="noreferrer">
              <h2 className="card-title">{props.imageTitle}</h2>
            </a>
            <a className="textDecoration" href={props.imageGithub} target="_blank" rel="noreferrer">
              <img className="githubLink" src={githubLogo} alt="GitHub"></img>
            </a>
              <p className="card-text descriptionText">{props.imageDescription}</p>
          </div>
          
    </div>
  );
}

export default Project;