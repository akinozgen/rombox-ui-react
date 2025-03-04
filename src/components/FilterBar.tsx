import React from 'react';
import { Search, Filter } from 'lucide-react';
import { FilterOptions, GameRegion, GameSystem } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleSystemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, system: e.target.value as GameSystem | 'All' }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, region: e.target.value as GameRegion | 'All' }));
  };

  return (
    <div className="glass mb-6 py-4 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              className="glass-input pl-10 pr-4 py-3 w-full rounded-lg focus:outline-none"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-purple-400" />
              <span className="text-sm font-medium text-gray-300">Filters:</span>
            </div>
            
            <div className="flex gap-2 flex-grow md:flex-grow-0">
              <select
                className="glass-select rounded-lg py-3 px-4 focus:outline-none appearance-none"
                value={filters.system}
                onChange={handleSystemChange}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
              >
                <option value="All">All Systems</option>
                <option value="PS1">PlayStation</option>
                <option value="PS2">PlayStation 2</option>
                <option value="PSP">PSP</option>
              </select>
              
              <select
                className="glass-select rounded-lg py-3 px-4 focus:outline-none appearance-none"
                value={filters.region}
                onChange={handleRegionChange}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
              >
                <option value="All">All Regions</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;