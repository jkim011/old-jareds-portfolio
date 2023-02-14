import React from 'react';

import '../style/Portfolio.css'


export default function Resume() {
  return (
    <div>
      <h3 className='title'>Resume</h3>

        <a style={{textDecoration:"none"}} href='...'>
          <p style={{marginLeft:"5%"}}>Click to download resume</p>
        </a>
        
        <div style={{marginLeft:"5%"}}>
          <h5>Front-End Proficiencies</h5>
           <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
            </ul>
        </div>      

        <div style={{marginLeft:"5%"}}>
          <h5>Back-End Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>MySql</li>
            <li>REST</li>
          </ul>
        </div>
        
    </div>
  )
}