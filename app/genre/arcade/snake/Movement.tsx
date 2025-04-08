import React, { useEffect, useState } from 'react';

const SnakeHead = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [borderradius, setBorderradius] = useState({ toprightradius:15, bottomrightradius:15, 
    topleftradius:10, bottomleftradius:10,
  });
  

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const { key } = event;
      const { top, left } = position;
      const {toprightradius, topleftradius, bottomrightradius, bottomleftradius} = borderradius;

      switch (key) {
        case 'ArrowUp':
          setPosition({ top: top - 25, left });
          break;
        case 'ArrowDown':
          setPosition({ top: top + 25, left });
          setBorderradius({toprightradius: toprightradius - 5, topleftradius , bottomrightradius, 
            bottomleftradius: bottomleftradius + 5
          })
          break;
        case 'ArrowLeft':
          setPosition({ top, left: left - 25 });
          break;
        case 'ArrowRight':
          setPosition({ top, left: left + 25 });
          break;
        default:
          break;
      }
    };
    

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [borderradius,position]);

  return (
    <div
      style={{
        position: 'relative',
        height: '25px',
        width: '25px',
        backgroundColor: 'red',
        top: `${position.top}px`,
        left: `${position.left}px`,
        borderTopLeftRadius: `${borderradius.topleftradius}px`,
        borderBottomLeftRadius: `${borderradius.bottomleftradius}px`,
        borderTopRightRadius: `${borderradius.toprightradius}px`,
        borderBottomRightRadius: `${borderradius.bottomrightradius}px`,
        padding: '2px',
      }}
    ></div>
  );
};

        
export default SnakeHead;

