import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')} 
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#portfolio" 
                onClick={() => handlePageChange('Portfolio')} 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a 
                class="nav-link active" aria-current="page" href="#resume" 
                onClick={() => handlePageChange('Resume')} 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>

            <li className="nav-item">
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