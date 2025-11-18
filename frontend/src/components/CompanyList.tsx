import React, { useState } from 'react';
import { useCompany } from '../context/CompanyContext';
import FilterBar from '../components/FilterBar';
import CompanyCard from '../components/CompanyCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10; 

const CompanyList: React.FC = () => {
  const { companies, loading, error } = useCompany();
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

 
  const filtered = companies
    .filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) ||
     c.location.toLowerCase().includes(search.toLowerCase())) &&
    (industry ? c.industry === industry : true)
  )
  
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

 
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-4 md:p-8">
    
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
        <FilterBar search={search} setSearch={setSearch} industry={industry} setIndustry={setIndustry} />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="border px-4 py-2 rounded-md"
        >
          Sort by Name {sortAsc ? '↑' : '↓'}
        </button>
      </div>

      {paginated.length === 0 ? (
        <p className="text-center mt-10">No companies found.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {paginated.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}

      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default CompanyList;
