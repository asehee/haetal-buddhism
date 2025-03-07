import React from 'react';
import { cn } from '../ui/cn';

const MenuBar: React.FC = () => {
  const menuItems: string[] = ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'];

  return (
    <div className="flex bg-win98-gray border-b border-win98-shadow h-5">
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className={cn(
            "text-xs py-0.5 px-2 cursor-pointer",
            "hover:bg-win98-blue hover:text-white"
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;