import axios from "axios";
import { type Company } from "../types/company";

export const getCompanies = async (): Promise<Company[]> => {
  const response = await axios.get("/db.json"); // <-- Important change
  return response.data.companies || [];
};
