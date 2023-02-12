import React from "react";

import '../components/style/Project.css'


function Project(props) {
  return (
    <div className="card text-bg-dark size margin">
      <a href={props.imageHref} target="_blank" rel="noreferrer">
        <img src={props.imageSrc} className="card-img" alt="..."/>
        <div className="card-img-overlay text-color">
          <h5 className="card-title">{props.imageTitle}</h5>
          <p className="card-text">{props.imageDescription}</p>
        </div>
      </a>
        
    </div>
  );
}

export default Project;