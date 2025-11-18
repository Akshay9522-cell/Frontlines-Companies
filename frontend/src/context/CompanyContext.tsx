import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Company } from '../types/company';
import { getCompanies } from '../api/companyApi';

interface CompanyContextProps {
  companies: Company[];
  loading: boolean;
  error: string;
}

const CompanyContext = createContext<CompanyContextProps>({
  companies: [],
  loading: false,
  error: ''
});

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getCompanies()
      .then(data => setCompanies(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CompanyContext.Provider value={{ companies, loading, error }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
