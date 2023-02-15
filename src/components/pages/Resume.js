import React from 'react';

import '../style/Resume.css'

import resumePdf from '../../assets/jareds-coding-resume.pdf'

export default function Resume() {
  return (
    <div>
      <h3 className='title'>Resume</h3>

        <a className='resumeLink' href={resumePdf} download='jareds-coding-resume.pdf'>
          <p className='resumeContents resumeLink'>Click to download resume</p>
        </a>
        
        <div className='resumeContents'>
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

        <div className='resumeContents'>
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