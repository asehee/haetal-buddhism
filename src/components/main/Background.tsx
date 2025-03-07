import React from 'react';
import Door from './Door';
import EnterText from './EnterText';

const StarryBackground: React.FC = () => {
  return (
    <div className={`
      bg-black bg-stars bg-stars h-full
      flex flex-col items-center justify-between py-10
    `}>
      <div className="text-win98-royal font-serif text-4xl font-bold 
                    [text-shadow:0_0_5px_#fff,0_0_10px_#fff]">
        eely's World
      </div>
      
      <Door />
      
      <EnterText />
    </div>
  );
};

export default StarryBackground;