import React from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import { useGameData } from './hooks/useGameData';

function App() {
  const { 
    games, 
    loading, 
    error, 
    filters, 
    setFilters,
    totalCount,
    filteredCount
  } = useGameData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4">
        <FilterBar filters={filters} setFilters={setFilters} />
        
        <main className="flex-grow">
          {error ? (
            <div className="py-8 text-center">
              <div className="glass p-6 rounded-xl border border-red-500">
                <p className="text-red-400">{error}</p>
                <button 
                  className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="glass px-6 py-4 rounded-xl mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold gradient-text">
                  Game Collection
                </h2>
                <div className="text-sm text-gray-300">
                  Showing <span className="text-purple-400 font-medium">{filteredCount}</span> of <span className="text-purple-400 font-medium">{totalCount}</span> games
                </div>
              </div>
              <GameGrid games={games} loading={loading} />
            </>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;