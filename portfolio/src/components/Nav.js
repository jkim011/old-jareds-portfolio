import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')} 
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>

            <li class="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#portfolio" 
                onClick={() => handlePageChange('Portfolio')} 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>

            <li class="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#resume" 
                onClick={() => handlePageChange('Resume')} 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>

            <li class="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#contact" 
                onClick={() => handlePageChange('Contact')} 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
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