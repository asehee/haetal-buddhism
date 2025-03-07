import React from 'react';
import TitleBar from './TitleBar';
import MenuBar from './MenuBar';
import ToolBar from './ToolBar';
import AddressBar from './AddressBar';
import StatusBar from './StatusBar';

interface IEFrameProps {
  children: React.ReactNode;
}

const IEFrame: React.FC<IEFrameProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-win98-teal">
      <div className="w-[800px] h-[600px] bg-win98-gray border-3 border-win98-gray rounded-sm shadow-win98 
                      flex flex-col overflow-hidden md:w-full md:h-screen">
        <TitleBar />
        <MenuBar />
        <ToolBar />
        <AddressBar />
        
        <div className="flex-grow bg-white overflow-auto border-2 border-t-win98-shadow border-l-win98-shadow border-r-white border-b-white">
          {children}
        </div>
        
        <StatusBar />
      </div>
    </div>
  );
};

export default IEFrame;