import React from "react";

import '../components/style/Project.css'

function Project(props) {
  return (
    <div class="card text-bg-dark size display margin">
      <a href="..." target="_blank" rel="noreferrer">
        <img src={props.src} class="card-img" className="img-fluid" alt={props.projectName}/>
      </a>
        <div class="card-img-overlay">
            <h5 class="card-title">{props.projectName};aldkjf</h5>
            <p class="card-text">{props.projectDesc}asfd</p>
        </div>
    </div>
  );
}

export default Project;