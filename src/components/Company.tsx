import { Spinner } from '@blueprintjs/core';
import { CompanyType } from '../types';
import { MosaicKey } from 'react-mosaic-component/lib/types';

type CompanyProps = {
    company: CompanyType[];
    isLoading: boolean;
};

const Company = ({ company, isLoading } : CompanyProps) => {
    if (isLoading) {
        return <Spinner />;
    }
    
    if (!company) {
        return <div>No companies data available</div>;
    }

  return (
    <div>
      {company?.map((item) => {
        const companyEntries = {
          'Ticker': item.ticker,
          'Name': item.name,
          'Legal name': item.legal_name,
          'Stock exchange': item.stock_exchange,
          'Short description': item.short_description,
          'Long description': item.long_description,
          'Web': item.company_url,
          'Business address': item.business_address,
          'Business phone': item.business_phone_no,
          'Entity legal form': item.entity_legal_form,
          'Latest filing date': item.latest_filing_date,
          'Inc country': item.inc_country,
          'Employees': item.employees,
          'Sector': item.sector,
          'Industry category': item.industry_category,
          'Industry group': item.industry_group,
          'First stock price date': item.first_stock_price_date,
          'Last stock price date': item.last_stock_price_date,
          'Thea enabled': item.thea_enabled ? 'Yes' : 'No',
          'Legacy sector': item.legacy_sector,
          'Legacy industry category': item.legacy_industry_category,
          'Legacy industry group': item.legacy_industry_group,
        };

        return (
          <div key={item.id as MosaicKey} className="p-3 fz-[14px]">
            {Object.entries(companyEntries).map(([key, value]) => (
                <p key={key} className='mb-3'><b className='pr-2'>{key}:</b>{value}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Company;