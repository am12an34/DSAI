import React, { useState } from 'react';
import './Button1.css';
const Button1 = ({ onClick, text, Icon, HoverIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button 
      className="button1" 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text} {isHovered ? <HoverIcon /> : <Icon />}
    </button>
  );
};

export default Button1;
