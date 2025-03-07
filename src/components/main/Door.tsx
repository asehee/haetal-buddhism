import React from 'react';
import { cn } from '../ui/cn';

const Door: React.FC = () => {
  return (
    <div className="my-5">
      <div className="w-[150px] h-[250px] bg-[#555] p-2.5 flex justify-center items-center">
        <div className={cn(
          "w-[130px] h-[230px] bg-[#ddd] relative cursor-pointer",
          "shadow-[inset_0_0_0_25px_#f5f5f5] transition-transform duration-500",
          "hover:transform hover:[transform:perspective(500px)_rotateY(15deg)]"
        )}>
          <div className="absolute w-2 h-5 bg-win98-orange right-2.5 top-[120px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Door;