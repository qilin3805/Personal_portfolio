import React from 'react';
import './css/index.css';
import LeftNavigation from './LeftNavigation';
import StoryRight from './StoryRight';

function Story() {
  return (
    <div className="container">
      <LeftNavigation/>
      <StoryRight/>
    </div>
  );
}

export default Story;