import React from 'react';
import 'css/index.css';
import MemoryTop from 'Memory/MemoryTop';
import MemoryContent from 'Memory/MemoryContent';
import TopNavigation from 'TopNavigation';

function Memory() {
  return (
    <div className="top-container">
      <TopNavigation/>
      <div>
        <MemoryTop/>
        <MemoryContent/>
      </div>
    </div>
  );
}

export default Memory;