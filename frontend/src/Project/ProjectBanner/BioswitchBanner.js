import React, { useRef, useState } from 'react';
import { useTrail, animated } from '@react-spring/web'; // Importing animation-related functions from react-spring
import { useNavigate } from 'react-router-dom';
import 'css/projectContent/projectTitle.css'; // Import the CSS file

// Define items
const items = ['B', 'I', 'O', 'S', 'W', 'I', 'T', 'C', 'H'];

function BlossomBanner() {
  // State and hooks initialization
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track whether the user has interacted
  const navigate = useNavigate();

  // Function to handle click events
  const handleClick = () => {
    setHasInteracted(true); // Set hasInteracted to true when the user clicks on the web
    if (isPlaying) return;

    // Toggle flip animation
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  // Function to handle play/pause button click
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Navigate to BioswitchPage when playing
      navigate('/BioswitchPage');
    }
  };

  // Function to handle back button click
  const handleBack = () => {
    console.log('Back button clicked');
    navigate('/Project'); // Navigate back to Project page
  };

  // Render the Bioswitch component
  return (
    <div>
      <div className="TitleContainer" onClick={handleClick}>
        <div className="Container">
          {trail.map(({ rotateX }, i) => (
            <div className="Box" key={i}>
              <animated.div
                className="FrontBox"
                style={{
                  transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                  transformStyle: 'preserve-3d',
                }}
              >
                {'?'}
              </animated.div>
              <animated.div
                className="BackBox"
                style={{
                  transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                  transformStyle: 'preserve-3d',
                }}
              >
                {items[i]}
              </animated.div>
            </div>
          ))}
        </div>
        {hasInteracted && ( // Render the button only if the user has interacted
          <div className="ButtonContainer">
            <button className="Button" onClick={handleBack}>Back</button>
            <button className="Button" onClick={handlePlay}>Start</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlossomBanner;
