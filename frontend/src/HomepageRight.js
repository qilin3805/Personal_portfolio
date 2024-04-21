import React, { useState } from 'react';
import Draggable from 'react-draggable';
import 'css/homePage.css';
import { useNavigate } from 'react-router-dom';

// Added onClick prop to DraggableBox component
const DraggableBox = ({ id, content, position, onDrag, onDoubleClick, onClick }) => (
    <Draggable bounds="parent" position={position} onDrag={onDrag}>
      {/* Correctly pass onClick function */}
      <div className="box" onDoubleClick={onDoubleClick} onClick={() => onClick(id)}>
        {content}
      </div>
    </Draggable>
  );

function HomePageRight() {
  const navigate = useNavigate();
  const boundary = {
    minX: 0,
    minY: 0,
    maxX: 800, 
    maxY: 600, // Adjust this based on your actual boundary
  };

  const originalPositions = {
    STORY: { x: 0, y: 0 },
    PROJECT: { x: 220, y: 180 },
    MEMORY: { x: 440, y: 360 },
    GRABBOX: { x: 660, y: 540 },
  };

  // Initialize the positions state with originalPositions
  const [positions, setPositions] = useState(originalPositions);

  const handleDrag = (e, data) => {
    const { x: blankX, y: blankY } = data;
    const popDistance = 100; // Distance within which other boxes will pop away

    // Calculate and update positions
    const newPositions = Object.entries(positions).reduce((acc, [id, pos]) => {
      if (id === 'GRABBOX') {
        acc[id] = { x: blankX, y: blankY };
        return acc;
      }

      const distance = Math.sqrt((blankX - pos.x) ** 2 + (blankY - pos.y) ** 2);
      if (distance < popDistance) {
        // Calculate a new position for the box to pop away to
        const angle = Math.atan2(pos.y - blankY, pos.x - blankX);
        let newX = pos.x + Math.cos(angle) * popDistance;
        let newY = pos.y + Math.sin(angle) * popDistance;

        // Ensure newX and newY are within boundaries
        newX = Math.min(Math.max(newX, boundary.minX), boundary.maxX);
        newY = Math.min(Math.max(newY, boundary.minY), boundary.maxY);

        acc[id] = { x: newX, y: newY };
      } else {
        acc[id] = pos; // No change for this box
      }
      return acc;
    }, {});

    setPositions(newPositions);
  };

  const handleReset = () => {
    // Reset positions of all boxes except 'blankBox' to their original positions
    setPositions(originalPositions);
  };

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
