import React from 'react';
import { cn } from '../ui/cn';
import { EarthIcon } from '../icons/Icons';

const AddressBar: React.FC = () => {
  return (
    <div className="flex bg-win98-gray p-1 items-center border-b border-win98-shadow">
      <div className="text-xs mr-1">Address</div>
      <div className={cn(
        "flex flex-grow bg-white border border-win98-shadow",
        "border-t-win98-darkgray border-l-win98-darkgray h-5 items-center px-1"
      )}>
        <div className="flex items-center mr-1">
          <EarthIcon />
        </div>
        <div className="text-xs text-win98-blue">https://www.logrocket.com</div>
      </div>
      <button className="win98-button ml-1 px-2 h-[22px] text-xs">Go</button>
    </div>
  );
};

export default AddressBar;