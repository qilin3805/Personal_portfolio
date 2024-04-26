import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import 'css/homePage.css';
import { useNavigate } from 'react-router-dom';

// Component for draggable boxes
const DraggableBox = ({ id, content, position, onDrag, onDoubleClick, onClick }) => {
  const nodeRef = useRef(null); // Create a ref for the draggable element

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      position={position}
      onDrag={onDrag}
    >
      <div ref={nodeRef} className="box" onDoubleClick={onDoubleClick} onClick={() => onClick(id)}>
        {content}
      </div>
    </Draggable>
  );
};

function HomePageRight() {
  const navigate = useNavigate();
  const originalPositions = {
    STORY: { x: 0, y: 0 },
    PROJECT: { x: 220, y: 180 },
    MEMORY: { x: 440, y: 360 },
    GRABBOX: { x: 660, y: 540 },
  };

  // Initialize the positions state with originalPositions
  const [positions, setPositions] = useState(originalPositions);

  // Handle drag event
  const handleDrag = (e, data, boxId) => {
    if (boxId !== 'GRABBOX') {
      return; // Ignore drag events for other boxes
    }
    const { x: dragX, y: dragY } = data;
    const newPositions = { ...positions };

    // Update the position of the grab box
    newPositions[boxId] = { x: dragX, y: dragY };
    setPositions(newPositions);
  };

  // Reset box positions to original
  const handleReset = () => {
    setPositions(originalPositions);
  };

  // Handle click events
  const handleClick = (id) => {
    if (id === 'STORY') {
      navigate('/Story');
    }
    if (id === 'PROJECT') {
      navigate('/Project')
    }
    if (id === 'MEMORY') {
      navigate('/Memory')
    }
  };

  return (
    <div className="right-homepage">
      {Object.keys(positions).map((boxId) => (
        <DraggableBox
          key={boxId}
          id={boxId}
          content={boxId.replace(/([A-Z])/g, ' $1').trim()}
          position={positions[boxId]}
          onDrag={(e, data) => handleDrag(e, data, boxId)} // Adjusted for consistency, even though the original handleDrag doesn't use id
          onDoubleClick={boxId === 'GRABBOX' ? handleReset : undefined}
          onClick={handleClick} // Now properly passed as a prop
        />
      ))}
    </div>
  );
}

export default HomePageRight;
