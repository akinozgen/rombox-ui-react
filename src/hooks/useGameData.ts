import { useState, useEffect, useMemo } from 'react';
import { Game, FilterOptions } from '../types';
import { mockGames } from '../data/mockData';

export const useGameData = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    system: 'All',
    region: 'All',
    searchQuery: '',
  });

  // In a real application, this would fetch data from an API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        // Simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // In a real app, this would be an API call
        // const response = await fetch('/api/games');
        // const data = await response.json();
        
        setGames(mockGames);
        setLoading(false);
      } catch (err) {
        setError('Failed to load game data');
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      // Filter by system
      if (filters.system !== 'All' && game.system !== filters.system) {
        return false;
      }
      
      // Filter by region
      if (filters.region !== 'All' && game.region !== filters.region) {
        return false;
      }
      
      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return (
          game.title.toLowerCase().includes(query) ||
          game.serial.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  }, [games, filters]);

  return {
    games: filteredGames,
    loading,
    error,
    filters,
    setFilters,
    totalCount: games.length,
    filteredCount: filteredGames.length,
  };
};