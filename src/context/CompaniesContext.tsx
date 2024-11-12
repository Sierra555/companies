import React from 'react';
import { CompanyType } from '../types';

export type CompaniesContextType = {
    companies: CompanyType[],
    isLoading: boolean,
}

export const CompaniesContext = React.createContext<CompaniesContextType>({
    companies: [],
    isLoading: false,
});