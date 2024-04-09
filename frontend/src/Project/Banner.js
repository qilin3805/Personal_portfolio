import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import '../css/garden.css';

const Banner = () => {
  const canvasRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  let itercount = 0;
  const itertot = 40;
  const denseness = 10;
  
  const parts = useMemo(() => [], []);

  const drawCircle = useCallback((ctx, x, y) => {
    const startx = Math.random() * ctx.canvas.width;
    const starty = Math.random() * ctx.canvas.height;

    const velx = (x - startx) / itertot;
    const vely = (y - starty) / itertot;

    parts.push({
      c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
      x: x, // goal position
      y: y,
      x2: startx, // start position
      y2: starty,
      r: true, // Released (to fly free!)
      v: { x: velx, y: vely }
    });
  }, [parts, itertot]);

  const update = useCallback((ctx) => {
    let dx, dy, sqrDist;
    itercount++;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].r === true) {
        parts[i].x2 += parts[i].v.x;
        parts[i].y2 += parts[i].v.y;
      }
      if (itercount === itertot) {
        parts[i].v = { x: (Math.random() * 6) * 2 - 6, y: (Math.random() * 6) * 2 - 6 };
        parts[i].r = false;
      }

      dx = parts[i].x - mouse.current.x;
      dy = parts[i].y - mouse.current.y;
      sqrDist = Math.sqrt(dx * dx + dy * dy);

      if (sqrDist < 20) {
        parts[i].r = true;
      }

      ctx.fillStyle = parts[i].c;
      ctx.beginPath();
      ctx.arc(parts[i].x2, parts[i].y2, 4, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }, [itercount, mouse, parts, itertot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const context = canvas.getContext('2d');
    const bgContext = bgCanvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;

    // Load background image
    const img = new Image();
    // // img.src = '../../public/garden.jpg';
    // img.src = 'garden.jpg';
    img.onload = () => {
      bgContext.drawImage(img, 0, 0, bgCanvas.width, bgCanvas.height);
    };

    const text = "GARDEN";
    const textSize = 300;
    const textX = (bgCanvas.width - bgContext.measureText(text).width) / 2;
    const textY = (bgCanvas.height + textSize) / 2;

    bgContext.font = `${textSize}px impact`;
    bgContext.fillText(text, textX, textY);

    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
      };
    };

    const handleMouseOut = () => {
      mouse.current = { x: -100, y: -100 };
    };

    const getCoords = () => {
      const imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);

      for (let height = 0; height < bgCanvas.height; height += denseness) {
        for (let width = 0; width < bgCanvas.width; width += denseness) {
          const pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
          if (pixel === 255) {
            drawCircle(context, width, height);
          }
        }
      }

      setInterval(() => update(context), 40);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);

    getCoords();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, [drawCircle, update]);

  return (
    <div className="garden">
      <canvas ref={bgCanvasRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ margin: 0, overflow: 'hidden' }} />
    </div>
  );
};

export default Banner;
