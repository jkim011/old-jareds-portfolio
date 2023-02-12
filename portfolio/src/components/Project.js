import React from "react";

import '../components/style/Project.css'


function Project(props) {
  return (
    <div className="card text-bg-dark display margin border wrap">
      <a className="wrap " href={props.imageHref} target="_blank" rel="noreferrer">
        <img src={props.imageSrc} className="card-img border display" alt="..."/>
        <div className="card-img-overlay text-color ">
          <h5 className="card-title">{props.imageTitle}</h5>
          <p className="card-text">{props.imageDescription}</p>
        </div>
      </a>
        
    </div>
  );
}

export default Project;