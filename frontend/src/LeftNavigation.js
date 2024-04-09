import React from 'react';
import './css/index.css';
import { Link } from 'react-router-dom';

function LeftNavigation() {
    return (
        <div className="left-side">
          <div className="name-section">
            <h1>
              <Link to="/">
                Hi! I'm Qilin Wu
              </Link>
            </h1>
          </div>

          <div className="about-section">
            <h2>About</h2>
            <p>QILIN WU is a design tech lover. Her work investigates architecture, computational design, tangible interactions, and making cultures. She is particularly interested in exploring alternative material approaches for designing interactive systems.</p>
          </div>
          
          <div className="nav-section">
            <h2>Works</h2>
            <p>Technology</p>
            <p>Story</p>
            <p>Design</p>
          </div>
          
          <div className="contact-info">
            <p>qilinwu@andrew.cmu.edu</p>
            <p>LinkedIn</p>
            <p>@qilinwu</p>
          </div>
        </div>
    );
  }
  
  export default LeftNavigation;