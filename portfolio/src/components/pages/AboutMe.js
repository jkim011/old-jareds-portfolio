import React from 'react';

import '../style/AboutMe.css'

import profilePic from '../../assets/portfolioPic.jpg'

export default function AboutMe() {
  return (
    <div style={{marginBottom:"10px"}}>
      <h3 className='title'>About Me</h3>
      <div className='bio'>
        <img className='bioImg' src={profilePic} alt="Profile"/>
        <p className='bioText'>
          Hello my name is Jared! I am currently a student at UT Austin's coding bootcamp learning full stack development.
          My current goal is to complete this course with the knowledge and skills to get started in a career with web development.
          I have already built a handful of web applications with the full stack skills I have obtained so far, and I am continuing 
          to learn and keep building projects. 
          <br></br>
          <br></br>
          I am currently based in Lago Vista, Texas as of year 2022, and have lived in California my whole life prior. 
          When I am not being a student or honing my coding skills, my hobbies are martial arts training, video games, and hanging out with friends. 
        </p>
      </div>
      
    </div>
  );
}