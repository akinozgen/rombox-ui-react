import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass mt-8 py-8 rounded-t-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              Data sourced from <a href="https://psxdatacenter.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">PSX Data Center</a>
            </p>
            <p className="text-xs mt-1 text-gray-500">
              This is an unofficial archive and is not affiliated with Sony Interactive Entertainment.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            <span className="text-sm flex items-center text-gray-300">
              Made with <Heart size={14} className="mx-1 text-purple-500" /> in 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;