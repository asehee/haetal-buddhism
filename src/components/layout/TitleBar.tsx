'use client';

import React, { useState } from 'react';
import { cn } from '../ui/cn';

const TitleBar: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState<boolean>(true);
  
  return (
    <div className="flex justify-between items-center px-1 py-0.5 h-6 bg-win-gradient text-white">
      <div className="text-xs font-bold pl-1">Logrocket - Microsoft Internet Explorer</div>
      <div className="flex">
        <button className={cn(
          "w-5 h-[18px] ml-0.5 bg-win98-gray text-[10px]",
          "win98-button flex justify-center items-center"
        )}>
          _
        </button>
        <button 
          className={cn(
            "w-5 h-[18px] ml-0.5 bg-win98-gray text-[10px]",
            "win98-button flex justify-center items-center"
          )}
          onClick={() => setIsMaximized(!isMaximized)}
        >
          {isMaximized ? '❐' : '□'}
        </button>
        <button className={cn(
          "w-5 h-[18px] ml-0.5 bg-win98-gray text-[10px]",
          "win98-button flex justify-center items-center"
        )}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default TitleBar;