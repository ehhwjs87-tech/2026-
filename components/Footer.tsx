
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Hanulan Middle School. All rights reserved.</p>
        <p className="text-sm text-slate-400 mt-2">한울안중학교 | 대구광역시 달성군 현풍읍 지동길 31</p>
      </div>
    </footer>
  );
};

export default Footer;
