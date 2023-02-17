import React from 'react';

import '../components/style/index.css'


function Nav({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* <div className="container-fluid"> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          <ul className="navbar-nav navDesign">

            <li className="nav-item navItem">
              <a 
                aria-current="page" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')} 
                className= {`${currentPage === 'AboutMe' ? 'nav-link active navActive' : 'nav-link navItemColor'}`}
              >
                About Me
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                aria-current="page" href="#portfolio" 
                onClick={() => handlePageChange('Portfolio')} 
                className={`navItem ${currentPage === 'Portfolio' ? 'nav-link active navActive' : 'nav-link navItemColor'}`}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                aria-current="page" href="#resume" 
                onClick={() => handlePageChange('Resume')} 
                className={`navItem ${currentPage === 'Resume' ? 'nav-link active navActive' : 'nav-link navItemColor'}`}
              >
                Resume
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                aria-current="page" href="#contact" 
                onClick={() => handlePageChange('Contact')} 
                className={`navItem ${currentPage === 'Contact' ? 'nav-link active navActive' : 'nav-link navItemColor'}`}
              >
                Contact
              </a>
            </li>

          </ul>
        {/* </div> */}
      {/* </div> */}
    </nav>
  )
}

export default Nav;