import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  loading?: boolean;
}

const GameGrid: React.FC<GameGridProps> = ({ games, loading = false }) => {
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden animate-pulse">
              <div className="aspect-[3/4] bg-gray-800"></div>
              <div className="p-5">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl text-gray-300 mb-2">No games found matching your criteria</h3>
          <p className="text-gray-400">Try adjusting your filters or search query</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <GameCard key={`${game.serial}-${index}`} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;