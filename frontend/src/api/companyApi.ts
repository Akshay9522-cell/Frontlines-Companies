// src/api/companyApi.ts
import axios from 'axios';
import type { Company } from '../types/company';

const BASE_URL = '/api'; // point to serverless function

export const getCompanies = async (): Promise<Company[]> => {
  const response = await axios.get(`${BASE_URL}/data`);
  return response.data.companies; // access "companies" array
};
