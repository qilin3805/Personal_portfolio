import React from 'react';
import './css/index.css';
import LeftNavigation from './LeftNavigation';
import RightCV from './RightCV';

function Story() {
  return (
    <div className="container">
      <LeftNavigation/>
      <div>
        <RightCV/>
      </div>
    </div>
  );
}

export default Story;