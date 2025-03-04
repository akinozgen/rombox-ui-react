import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const getSystemClass = (system?: string) => {
    switch (system) {
      case 'PS1': return 'badge-ps1';
      case 'PS2': return 'badge-ps2';
      case 'PSP': return 'badge-psp';
      default: return 'bg-gray-700';
    }
  };

  const getRegionClass = (region?: string) => {
    switch (region) {
      case 'USA': return 'badge-usa';
      case 'Europe': return 'badge-europe';
      case 'Japan': return 'badge-japan text-gray-900';
      default: return 'bg-gray-600';
    }
  };

  // Default fallback image based on system
  const getFallbackImage = (system?: string) => {
    switch (system) {
      case 'PS1': return 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&h=400&auto=format&fit=crop';
      case 'PS2': return 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=300&h=400&auto=format&fit=crop';
      case 'PSP': return 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=300&h=400&auto=format&fit=crop';
      default: return 'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=300&h=400&auto=format&fit=crop';
    }
  };

  const coverImage = game.cover_image || getFallbackImage(game.system);

  return (
    <div className="glass-card rounded-xl overflow-hidden group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={coverImage}
          alt={`${game.title} cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 right-0 p-2 flex justify-end gap-1.5">
          <span className={`text-xs px-2.5 py-1 rounded-full text-white ${getSystemClass(game.system)}`}>
            {game.system}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full ${getRegionClass(game.region)}`}>
            {game.region}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 relative">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-100 line-clamp-2">{game.title}</h3>
        </div>
        
        <div className="text-sm text-gray-400 mb-4">
          <p className="font-mono text-purple-300">{game.serial}</p>
          <p className="line-clamp-1">{game.language}</p>
        </div>
        
        {game.info_url && (
          <a 
            href={game.info_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Info size={16} className="mr-1" />
            <span>View Details</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default GameCard;