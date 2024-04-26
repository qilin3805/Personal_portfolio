import React, { useEffect } from 'react';
import '../css/memory.css';

const MemoryTop = () => {
  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Selecting elements from the DOM
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    // Function to animate the cursor
    const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      // Applying transformation to the span element
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      // Resetting transformation on mouseleave event
      if (e.type === 'mouseleave') span.style.transform = '';
    };

    // Function to update the position of the custom cursor
    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };
    link.forEach(b => {
      b.addEventListener('mousemove', animateit);
      b.addEventListener('mouseleave', animateit);
    });
    // Adding event listener to window for cursor position
    window.addEventListener('mousemove', editCursor);

    // Cleanup function to remove event listeners
    return () => {
      link.forEach(b => {
        b.removeEventListener('mousemove', animateit);
        b.removeEventListener('mouseleave', animateit);
      });
      window.removeEventListener('mousemove', editCursor);
    };
  }, []);

  // rendering content for the component
  return (
    <div className="nav-wrapper">
      <nav>
        <div className="hover-this"><span>Hand Model</span></div>
        <div className="hover-this"><span>Scenery</span></div>
        <div className="hover-this"><span>Work of Art</span></div>
        <div className="hover-this"><span>Building</span></div>
        <div className="cursor"></div>
      </nav>
    </div>
  );
};

export default MemoryTop;
