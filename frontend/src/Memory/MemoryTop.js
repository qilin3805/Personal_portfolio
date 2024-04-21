import React, { useEffect } from 'react';
import '../css/memory.css';

const MemoryTop = () => {
  useEffect(() => {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach(b => {
      b.addEventListener('mousemove', animateit);
      b.addEventListener('mouseleave', animateit);
    });

    window.addEventListener('mousemove', editCursor);

    // Cleanup function
    return () => {
      link.forEach(b => {
        b.removeEventListener('mousemove', animateit);
        b.removeEventListener('mouseleave', animateit);
      });
      window.removeEventListener('mousemove', editCursor);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <nav>
        <div className="hover-this"><span>Hand Model</span></div>
        {/* <a href="#" className="hover-this"><span>Our Story</span></a> */}
        <div className="hover-this"><span>Scenery</span></div>
        <div className="hover-this"><span>Work of Art</span></div>
        <div className="hover-this"><span>Building</span></div>
        <div className="cursor"></div>
      </nav>
    </div>
  );
};

export default MemoryTop;
