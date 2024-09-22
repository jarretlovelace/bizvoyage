import React, { useState } from 'react';
import '/src/pages/style/Character.css'; // Assuming this is just a CSS import

const AnimatedCharacter = ({ pinPosition }) => {
  const [animation, setAnimation] = useState('wave');

  const handleClick = () => {
    // Change the animation on click
    setAnimation((prev) => (prev === 'wave' ? 'jump' : 'wave'));
  };

  return (
    <div
      className={`character ${animation}`} // Uses the animation class
      style={{ position: 'absolute', left: pinPosition?.left, top: pinPosition?.top }}
      onClick={handleClick}
    >
      {/* Render character graphic here */}
      <img src="/src/images/1char.png" alt="Character" />
    </div>
  );
};

export default AnimatedCharacter;
