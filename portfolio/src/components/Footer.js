import React from 'react';

import '../components/style/Footer.css'

import githubLogo from '../assets/logoImages/githubLogo.png'
import linkedinLogo from '../assets/logoImages/linkedinLogo.png'
import twitterLogo from '../assets/logoImages/twitterLogo.png'

function Footer({ currentPage, handlePageChange }) {
  return (
    // <div style={{ position:'fixed', bottom:'0', width:'100%', alignItems:'center', float:'right'}}>
    //   <div style={{ padding:'10px', marginBottom:'30px', marginLeft:'auto', marginRight:'auto', alignItems:'center', float:'left', }}>
    //     <a href="https://github.com/jkim011" target="_blank" rel="noreferrer">
    //         <img src={githubLogo} alt="GitHub"></img>
    //     </a>
    //     <a href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer">
    //         <img src={linkedinLogo} alt="LinkedIn"></img>
    //     </a>
    //     <a href="https://twitter.com/jkim0111" target="_blank" rel="noreferrer">
    //         <img src={twitterLogo} alt="Twitter"></img>
    //     </a>
    //   </div>
    // </div>
    <div className="footerWrap">
        <div className="footer">
            <div className="footerContent">
                <a href="https://github.com/jkim011" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="GitHub"></img>
                </a>
                <a href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn"></img>
                </a>
                <a href="https://twitter.com/jkim0111" target="_blank" rel="noreferrer">
                    <img src={twitterLogo} alt="Twitter"></img>
                </a>
            </div>     
        </div>
    </div>
  );
}

export default Footer;