import { Mosaic, MosaicWindow, MosaicNode, MosaicPath, getLeaves } from 'react-mosaic-component';
import { useState } from 'react';
import { CompaniesProvider } from './context';
import { CompanyInfo, CompanyInfoDropDown }  from './components';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles/index.css';

function App() {
  const [currentNode, setCurrentNode] = useState<MosaicNode<number> | null>({
    direction: 'row',
    first: 1,
    second: {
      direction: 'column',
      first: 2,
      second: 3,
    },
    splitPercentage: 40,
  });

  const totalWindowCount = currentNode ? getLeaves(currentNode): [];
  const maxId  = Math.max(...totalWindowCount);

  const [selectedTickers, setSelectedTickers] = useState<{ [key: string]: string }>({});

  const handleTickerChange = (path: MosaicPath, ticker: string) => {
    setSelectedTickers((prevState) => ({
      ...prevState,
      [path.join('-')]: ticker,
    }));
  };

  const handleMosaicChange = (newNode: MosaicNode<number> | null) => {
    setCurrentNode(newNode);
  };

  return (
    <CompaniesProvider>
      <div className="h-screen p-4 md:bg-gray-900">
        <Mosaic<number>
          renderTile={(_id, path) => (
            <MosaicWindow<number>
              path={path}
              title="Company info"
              className="shadow-lg border border-gray-700"
              createNode={() => maxId + 1}
            >
              <div className="flex flex-col p-2">
                <CompanyInfoDropDown path={path} selectedTickers={selectedTickers} handleTickerChange={handleTickerChange} />
                <CompanyInfo path={path} selectedTickers={selectedTickers} />
              </div>
            </MosaicWindow>
          )}
          value={currentNode}
          blueprintNamespace="bp5"
          onChange={handleMosaicChange}
        />
      </div>
    </CompaniesProvider>
  );
}

export default App;