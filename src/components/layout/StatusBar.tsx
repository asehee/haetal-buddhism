import React from 'react';
import { cn } from '../ui/cn';

const StatusBar: React.FC = () => {
  const statusItemClass = cn(
    "text-[11px] border border-t-win98-shadow border-l-win98-shadow",
    "border-r-white border-b-white px-1 py-0.5"
  );
  
  return (
    <div className="flex justify-between bg-win98-gray border-t border-win98-shadow p-0.5 h-5">
      <div className={statusItemClass}>Done</div>
      <div className={cn(statusItemClass, "w-20 text-center")}>Internet</div>
    </div>
  );
};

export default StatusBar;