import React from 'react';
import ProjectRight from './ProjectRight'; // Make sure the path is correct based on your file structure
import LeftNavigation from './LeftNavigation';
import './css/index.css';

function Project() {
  return (
    <div className="container">
        <LeftNavigation/>
        <ProjectRight/>
    </div>
  );
}

export default Project;
