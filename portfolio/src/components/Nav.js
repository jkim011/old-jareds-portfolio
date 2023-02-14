import React from 'react';

import '../components/style/Nav.css'


function Nav({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navDesign">

            <li className="nav-item navItem">
              <a 
                class="nav-link active" 
                aria-current="page" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')} 
                className= {`navItem ${currentPage === 'AboutMe' ? 'nav-link active navBold' : 'nav-link'}`}
              >
                About Me
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                class="nav-link active" 
                aria-current="page" href="#portfolio" 
                onClick={() => handlePageChange('Portfolio')} 
                className={`navItem ${currentPage === 'Portfolio' ? 'nav-link active navBold' : 'nav-link'}`}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                class="nav-link active" 
                aria-current="page" href="#resume" 
                onClick={() => handlePageChange('Resume')} 
                className={`navItem ${currentPage === 'Resume' ? 'nav-link active navBold' : 'nav-link'}`}
              >
                Resume
              </a>
            </li>

            <li className="nav-item navItem">
              <a 
                class="nav-link active" 
                aria-current="page" href="#contact" 
                onClick={() => handlePageChange('Contact')} 
                className={`navItem ${currentPage === 'Contact' ? 'nav-link active navBold' : 'nav-link'}`}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;