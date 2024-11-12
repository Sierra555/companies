import React from 'react';
import { CompaniesContext } from '../context';
import { CompanyType } from '../types';
import { MosaicPath } from 'react-mosaic-component';
import Company from './Company';

type CompanyInfoProps = {
  path: MosaicPath;
  selectedTickers: { [key: string]: string }; 
}

const CompanyInfo = ({ path, selectedTickers }: CompanyInfoProps) => {
  const { companies, isLoading } = React.useContext(CompaniesContext);
  const selectedTicker = selectedTickers[path.join('-')] || 'AAPL';
  const companyData: CompanyType[] = companies?.filter(company => company.ticker === selectedTicker);

  return (
    <>
        <Company company={companyData} isLoading={isLoading} />
    </>
  );
};

export default CompanyInfo;