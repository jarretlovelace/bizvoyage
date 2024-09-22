import React from 'react';
import characterImage from '../images/1char.png'; // Update with your image path

const AnimatedCharacter = ({ className }) => {
    return (
        <div className={`animated-character ${className}`}>
            <img src={characterImage} alt="Character" className="w-32 h-32" />
            {/* Add animations using CSS or libraries like framer-motion */}
        </div>
    );
};

export default AnimatedCharacter;
