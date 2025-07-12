"use client";
import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  onAddTeacher?: () => void;
}

export default function SearchBar({ onSearch, onFilter ,onAddTeacher}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };
  
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    onFilter?.(filter);
  };
  
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <form onSubmit={handleSearch} className="flex-1">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search teachers..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
      
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => handleFilter('all')}
          className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => handleFilter('active')}
          className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => handleFilter('on leave')}
          className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'on leave' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}
        >
          On Leave
        </button>
        <button
          type="button"
          onClick={() => handleFilter('inactive')}
          className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'inactive' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}
        >
          inactive
        </button>
      </div>
      
      <button onClick={onAddTeacher}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Teacher
      </button>
    </div>
  );
}