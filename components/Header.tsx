
import React from 'react';
import { GraduationCapIcon } from './icons';

interface HeaderProps {
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <GraduationCapIcon className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-slate-800">한울안중학교</span>
        </div>
        <nav>
          <button 
            onClick={onContactClick} 
            className="text-slate-600 hover:text-blue-600 font-semibold transition-colors duration-300"
          >
            입학 문의
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
