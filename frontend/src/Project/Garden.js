import React from 'react';
import '../css/garden.css';
// import backgroundImage from './garden.jpg'; // Adjust the import path as necessary

const Garden = () => {
//   const sectionStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//   };

  return (
    // <div className="garden" style={sectionStyle}>
    <div className="garden">
      <h1 className="garden-title">EE Garden</h1>
      <div className="garden-section">Section Content</div>
      {/* Repeat the above div for each section you have */}
    </div>
  );
};

export default Garden;