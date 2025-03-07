import React from 'react';
import { cn } from '../ui/cn';
import { BackIcon, FavoritesIcon, ForwardIcon, HistoryIcon, HomeIcon, RefreshIcon, SearchIcon } from '../icons/Icons';


const ToolBar: React.FC = () => {
  const buttonClass = cn(
    "win98-button h-[22px] px-2.5 mr-0.5 text-xs",
    "flex items-center justify-center"
  );
  
  return (
    <div className="flex bg-win98-gray p-0.5 border-b border-win98-shadow items-center">
      <button className={buttonClass}>
        <BackIcon />
      </button>
      <button className={buttonClass}>
        <ForwardIcon />
      </button>
      <div className="w-px h-[22px] bg-win98-darkgray mx-1"></div>
      
      <button className={buttonClass}>
        <RefreshIcon />
      </button>
      <button className={buttonClass}>
        <HomeIcon />
      </button>
      <button className={buttonClass}>
        <SearchIcon />
      </button>
      <button className={buttonClass}>
        <FavoritesIcon />
      </button>
      <button className={buttonClass}>
        <HistoryIcon />
      </button>
    </div>
  );
};

export default ToolBar;