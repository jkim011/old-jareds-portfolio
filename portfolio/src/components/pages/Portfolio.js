import React from 'react';

import Project from '../Project';

// Import project images to display on portfolio page
import test from '../../assets/projectImages/test.PNG'
import test2 from '../../assets/projectImages/test2.PNG'
import test3 from '../../assets/projectImages/test3.PNG'
import test4 from '../../assets/projectImages/test4.PNG'


export default function Portfolio() {
  return (
    <div>
      <h3>Portfolio:</h3>
        <div style={{display:'flex', flexWrap:"wrap", flexDirection:"row"}}> 
          <Project
            imageHref="https://www.behindthename.com/random/"
            imageSrc={test}
            imageTitle="Test Image"
            imageDescription="This is the test image"
          />
          
          <Project
            imageHref="https://www.name-generator.org.uk/rapper/"
            imageSrc={test2}
            imageTitle="Test Image 2"
            imageDescription="This is the second test image"
          />

          <Project
            imageHref="https://www.random.org/"
            imageSrc={test3}
            imageTitle="Test Image 3"
            imageDescription="This is the third test image"
          />

          <Project
            imageHref="https://www.lastpass.com/features/password-generator"
            imageSrc={test4}
            imageTitle="Test Image 4"
            imageDescription="This is the fourth test image"
          />
          
        </div>
    </div>
      
      

  )
}