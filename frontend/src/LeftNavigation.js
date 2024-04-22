import React, { useState, useEffect } from 'react';
import 'css/index.css';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Hi! I'm Qilin Wu";

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedText === text) {
        setTypedText('');
      } else if (typedText.length < text.length) {
        setTypedText(text.substring(0, typedText.length + 1));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [typedText, text]);

  return (
    <div className="left-side">
      <div className="name-section">
        <h1>
          <Link to="/">
            {typedText}
          </Link>
        </h1>
      </div>

      <div className="about-section">
        <h2>About</h2>
        <p>QILIN WU is a design tech lover. Her work investigates architecture, computational design, tangible interactions, and making cultures. She is particularly interested in exploring alternative material approaches for designing interactive systems.</p>
      </div>
      
      <div className="nav-section">
        <h2>Works</h2>
        <p><a href="/Story" className='menu'>+ Story</a></p>
        <p><a href="/Project" className='menu'>+ Project</a></p>
        <p><a href="/Memory" className='menu'>+ Memory</a></p>
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