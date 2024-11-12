import useSWR from "swr";
import { CompaniesContext } from './CompaniesContext';
import { ReactNode } from "react";
import { CompanyType } from '../types';

const ENDPOINT = 'http://localhost:3001/companies';

const fetcher = async (endpoint: string|URL): Promise<CompanyType[]> => {
  const response = await fetch(endpoint);
  const data = await response?.json();

  return data || [];
};

type CompaniesProviderProps = {
    children: ReactNode;
}
  
function CompaniesProvider({ children }: CompaniesProviderProps) {
    const { data, isLoading } = useSWR(ENDPOINT, fetcher);
    const companies = data || [];

    return (
        <CompaniesContext.Provider value={{ companies, isLoading: !!isLoading }}>
        {children}
        </CompaniesContext.Provider>
    );
}

export default CompaniesProvider;