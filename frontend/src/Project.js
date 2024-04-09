import React from 'react';
import RightProject from './RightProject'; // Make sure the path is correct based on your file structure
import LeftNavigation from './LeftNavigation';
import './css/index.css';

function Project() {
  return (
    <div className="container">
        <LeftNavigation/>
        <RightProject/>
    </div>
  );
}

export default Project;
