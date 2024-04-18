import React from 'react';
import './css/index.css';
import MemoryTop from './Memory/MemoryTop';
import MemoryContent from './Memory/MemoryContent';

function Memory() {
  return (
    <div>
      <MemoryTop/>
      <MemoryContent/>
    </div>
  );
}

export default Memory;