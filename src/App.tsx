import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Screens from './Screens';
import RemoveCache from './components/RemoveCache';
import CBOHelpers from './utils/helperFunctions';

const App: React.FC = () => {
  const [cache, setCache] = useState<boolean>(false);
  const [screen, setScreen] = useState<string>("OnboardFirstStep");

  useEffect(() => {
    const getStorage = CBOHelpers.getStorage('stripe-connected');
    if(getStorage && getStorage === 'yes') {
      setCache(true);
    }
  }, []);

  const Screen = Screens[screen] || (() => '');
  const headerSubtitle = screen === 'OnboardFirstStep' ? '–  A full payment solution for your business, free with {company}' : '';

  return (
    <div className="cbo-app">
      <TopBar />

      <div className="container">

        <Header 
          title="Client Billing" 
          subtitle={headerSubtitle} 
          links={[
            {label: "Docs", url: "#"}
          ]}
          onClick={() => setScreen('OnboardFirstStep')}
        />

        <div className="cbo-screen">
          <Screen screen={screen} setScreen={setScreen} cache={cache} setCache={setCache} />
        </div>

        <RemoveCache cache={cache} setCache={setCache}/>
      </div>
    </div>
  );
}

export default App;
