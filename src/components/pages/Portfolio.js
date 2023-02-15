import React from 'react';

import Project from '../Project';

import '../style/Portfolio.css'

// Import project images to display on portfolio page
import teamProfileGenerator from '../../assets/projectImages/team-profile-generator.PNG'
import textEditor from '../../assets/projectImages/text-editor.png'
import noteTaker from '../../assets/projectImages/note-taker.PNG'
import socialNetworkApi from '../../assets/projectImages/social-network-api.png'
import employeeTracker from '../../assets/projectImages/employee-tracker.PNG'
import ecommerceBackend from '../../assets/projectImages/ecommerce-backend.PNG'


export default function Portfolio() {
  return (
    <div>
      <h3 className='title'>Portfolio</h3>
        <div className='projectContainer'> 
          <Project
            imageHref="https://github.com/jkim011/jareds-team-profile-generator"
            imageGithub="https://github.com/jkim011/jareds-team-profile-generator"
            imageSrc={teamProfileGenerator}
            imageTitle="Team Profile Generator"
            imageDescription="Run with node.js"
          />
          
          <Project
            imageHref="https://jareds-text-editor.herokuapp.com/"
            imageGithub="https://github.com/jkim011/jareds-text-editor"
            imageSrc={textEditor}
            imageTitle="Text Editor"
            imageDescription="Built as a PWA"
          />

          <Project
            imageHref="https://jareds-note-taker.herokuapp.com/"
            imageGithub="https://github.com/jkim011/jareds-note-taker"
            imageSrc={noteTaker}
            imageTitle="Note Taker"
            imageDescription="Built with Express.js"
          />

          <Project
            imageHref="https://www.lastpass.com/features/password-generator"
            imageGithub="https://github.com/jkim011/jareds-portfolio"
            imageSrc={socialNetworkApi}
            imageTitle="Social Network API"
            imageDescription="API and back-end functionality for social network application. Built with MongoDB."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-employee-tracker#installation"
            imageGithub="https://github.com/jkim011/jareds-employee-tracker"
            imageSrc={employeeTracker}
            imageTitle="Employee Tracker"
            imageDescription="Tracks, adds, updates, and deletes employees from MySql database. Ran in the terminal with node."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-ORM-challenge#installation"
            imageGithub="https://github.com/jkim011/jareds-ORM-challenge"
            imageSrc={ecommerceBackend}
            imageTitle="ORM E-commerce back-end"
            imageDescription="Back-end of an e-commerce site using express and sequelize"
          />
          
        </div>
    </div>
      
      

  )
}