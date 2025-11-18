import React from 'react';
import { useState,useEffect } from 'react';

interface FilterProps {
  search: string;
  setSearch: (val: string) => void;
  industry: string;
  setIndustry: (val: string) => void;
}
const placeholderTexts = [
  'Search by Name',
  'Search by Location',
  'Search by Industry',
];


const FilterBar: React.FC<FilterProps> = ({ search, setSearch, industry, setIndustry }) => {
    const [currentText, setCurrentText] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let charIndex = 0;
    let forward = true;

    const interval = setInterval(() => {
      const text = placeholderTexts[currentText];

      if (forward) {
        setDisplayed(text.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === text.length) forward = false;
      } else {
        setDisplayed(text.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          forward = true;
          setCurrentText((prev) => (prev + 1) % placeholderTexts.length);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentText]);
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
   
      <input
        type="text"
        placeholder={displayed}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm placeholder-gray-400 transition"
      />

  
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="w-full md:flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition"
      >
        <option value="">All Industries</option>
        <option value="IT">IT</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        <option value="Environment">Environment</option>
        <option value="Food">Food</option>
      </select>
    </div>
  );
};

export default FilterBar;
