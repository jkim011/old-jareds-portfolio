import React from 'react';

import '../style/Resume.css'

import resumePdf from '../../assets/jareds-coding-resume.pdf'

export default function Resume() {
  return (
    <div>
      <h3 className='title'>Resume</h3>
      <hr className='divider'></hr>

      <div className='resumeContainer'>
        <a className='resumeLink' href={resumePdf} download='jareds-coding-resume.pdf'>
          <p>CLICK TO DOWNLOAD RESUME</p>
        </a>
      <br/>
      <br/>
        <h4>Front-End Proficiencies</h4>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>

        <h4>Back-End Proficiencies</h4>
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
  );
}