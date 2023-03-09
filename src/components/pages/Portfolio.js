import React from 'react';

import Project from '../Project';

import '../style/Portfolio.css'

// Import project images to display on portfolio page
import gitfund from '../../assets/projectImages/gitfund.PNG'
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
      <hr className='divider'></hr>
        <div className='projectContainer'> 
        <Project
            imageHref="https://git-fund.herokuapp.com/"
            imageGithub="https://github.com/RyStreet/git-fund"
            imageSrc={gitfund}
            imageTitle="GitFund"
            imageDescription="MERN Stack application. Crowdfunding and collaborating social app where users can post projects to recieve donations, and put them up for others to collaborate on."
          />
          
          <Project
            imageHref="https://jareds-text-editor.herokuapp.com/"
            imageGithub="https://github.com/jkim011/jareds-text-editor"
            imageSrc={textEditor}
            imageTitle="Text Editor"
            imageDescription="PWA. An installable text editor application with offline use capabilities. Uses IndexedDB for storage."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-team-profile-generator"
            imageGithub="https://github.com/jkim011/jareds-team-profile-generator"
            imageSrc={teamProfileGenerator}
            imageTitle="Team Profile Generator"
            imageDescription="Node.js. An application that can generate a team with the names of employees, their roles, and contact info. It is ran in the terminal and then creates an index.html file with the newly generated team profile."
          />        

          <Project
            imageHref="https://jareds-note-taker.herokuapp.com/"
            imageGithub="https://github.com/jkim011/jareds-note-taker"
            imageSrc={noteTaker}
            imageTitle="Note Taker"
            imageDescription="Express.js. A note taking application where users can write, save, and delete notes."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-social-network-api"
            imageGithub="https://github.com/jkim011/jareds-social-network-api"
            imageSrc={socialNetworkApi}
            imageTitle="Social Network API"
            imageDescription="Built with MongoDB. This repository is the API and back-end functionality for a social network application. No front end has been created yet."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-employee-tracker#installation"
            imageGithub="https://github.com/jkim011/jareds-employee-tracker"
            imageSrc={employeeTracker}
            imageTitle="Employee Tracker"
            imageDescription="Using MySQL. This application is ran in the terminal with node. It tracks, adds, updates, and deletes employees from a MySql database."
          />

          <Project
            imageHref="https://github.com/jkim011/jareds-ORM-challenge#installation"
            imageGithub="https://github.com/jkim011/jareds-ORM-challenge"
            imageSrc={ecommerceBackend}
            imageTitle="ORM E-commerce back-end"
            imageDescription="Express and Sequelize. This repository contains the back-end of an e-commerce site. No front end has been created yet."
          />
          
        </div>
    </div>
      
      

  )
}