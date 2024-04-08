import React from 'react';
import './css/index.css';
import LeftNavigation from './LeftNavigation';
import RightHomePage from './RightHomepage';

function HomePage() {
  return (
    <div className="container">
      <LeftNavigation/>
      <RightHomePage/>
    </div>
  );
}

export default HomePage;
