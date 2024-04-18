import React from 'react';
import './css/index.css';
import LeftNavigation from './LeftNavigation';
import HomePageRight from './HomepageRight';

function HomePage() {
  return (
    <div className="container">
      <LeftNavigation/>
      <HomePageRight/>
    </div>
  );
}

export default HomePage;
