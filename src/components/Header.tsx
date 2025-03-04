import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="glass py-6 mb-4 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 glow">
              <GameController size={32} className="text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">RetroVault</h1>
          </div>
          <div className="text-sm md:text-base">
            <span className="text-gray-300">PlayStation Game Archive</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;