import axios from 'axios';
import type { Company } from '../types/company';

const BASE_URL = 'http://localhost:5000';

export const getCompanies = async (): Promise<Company[]> => {
  const response = await axios.get(`${BASE_URL}/companies`);
  return response.data;
};
