import React from 'react';

import Project from '../Project';
import testImg from '../../assets/projectImages/test.PNG'


export default function Portfolio() {
  return (
    <div>
      <h3>Portfolio:</h3>
      <Project
        imageSrc={testImg}
        imageTitle="Test Image"
        imageDescription="This is the test image"
      />
      {/* <Project/>
      <Project/> */}
    </div>
  )
}