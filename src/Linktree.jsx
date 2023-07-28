// Linktree.jsx
import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './App.css'; // Create a separate CSS file for additional styles
 import {GiHeartWings, GiLobArrow,GiLotusFlower} from 'react-icons/gi'
 import {GrGithub } from 'react-icons/gr'
const Linktree = () => {
  const links = [
    { label: 'Github', url: 'https://github.com/Shaina-08', icon: <GrGithub/> },
    { label: 'Resume', url: 'https://plum-bunnie-15.tiiny.site/', icon: <GiLobArrow /> },
    { label: 'Portfolio', url: 'https://shaina-portfolio.vercel.app/', icon: <GiLotusFlower /> },
    { label: 'Twitter', url: 'https://twitter.com/Shaina48222434', icon: <FaTwitter /> },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shaina-bhardwaj-84a66a202', icon: <FaLinkedin /> },
  ];

  return (

    <div className="linktree">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="icon">
        <GiHeartWings/>
        {/* <GiVineFlower/> */}
        </div>
      <h1 className="linktree__header">Welcome! </h1>
      <div className="intro">Explore. Connect. Discover.
      
      </div>
      <div className="linktree__links">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="linktree__link">
            <span className="linktree__icon">{link.icon}</span>
            <span className="linktree__label">{link.label}</span>
          </a>
        ))}
      </div>
     
    </div>
     
     
  );
};

export default Linktree;
