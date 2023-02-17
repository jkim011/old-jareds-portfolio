import React, { useState } from 'react';

import '../components/style/index.css'

import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <div className='everything'>
        <div className='headerSection'>
          <Header/>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div> 
        
        {/* <Footer/> */}
        {renderPage()}
      </div>
    </main>
    
  );
}
