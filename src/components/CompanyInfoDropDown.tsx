import React from 'react';
import { CompaniesContext } from '../context';
import { MosaicPath } from 'react-mosaic-component/lib/types';

type CompanyInfoDropDownProps = {
    path: MosaicPath;
    selectedTickers: {[key: string]: string}; 
    handleTickerChange: (path: MosaicPath, ticker: string) => void;
}

const CompanyInfoDropDown = ({ path, selectedTickers, handleTickerChange }: CompanyInfoDropDownProps ) => {
    const { companies } = React.useContext(CompaniesContext);
    const companiesData = companies?.map(({ id, ticker }) => ({
        id: String(id),
        ticker: String(ticker),
    }));
    const nodePath = path.join('-');
    const selectedTicker = selectedTickers[nodePath] || '';
    
    return (
        <div className="w-max border border-gray-700 rounded">
            <select
                value={selectedTicker}
                id={`${nodePath}-ticker-select`}
                onChange={(e) => handleTickerChange(path, e.target.value)}
                className="p-2 rounded cursor-pointer hover:bg-secondary hover:text-white transition-colors"
            >
                <option>
                    Select company ticker
                </option>
                {companiesData?.map(({id, ticker}) => (
                    <option key={`${nodePath}-${id}`} value={ticker}>
                        {ticker}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CompanyInfoDropDown;