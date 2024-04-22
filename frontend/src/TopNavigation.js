import React from 'react';
import 'css/topNavigation.css';

function TopNavigation() {
  return (
    <nav className="top-navigation">
      <a href="/" className="name">
        QILIN WU
      </a>
      <div className="navigation-menu">
        <a href="/" className="menu-item">HOME</a>
        <a href="/Story" className="menu-item">STORY</a>
        <a href="/Project" className="menu-item">PROJECT</a>
        <a href="/Memory" className="menu-item">MEMORY</a>
      </div>
    </nav>
  );
}

export default TopNavigation;
