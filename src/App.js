import React from 'react';
import { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';

import './App.css';

const App = () => {

  // Local Storage

  // Manual clicks

  const [manualClickUpgrade, setManualClickUpgrade] = useState(() => {
    return parseInt(localStorage.getItem('manualClickUpgrade')) || 0;
  });
  const [manualClickUpgradeCost, setManualClickUpgradeCost] = useState(() => {
    return parseInt(localStorage.getItem('manualClickUpgradeCost')) || 1000;
  });

  // Auto clicks

  const [clicks, setClicks] = useState(() => {
    return parseInt(localStorage.getItem('clicks')) || 0;
  });
  const [autoClicks, setAutoClicks] = useState(() => {
    return parseInt(localStorage.getItem('autoClicks')) || 0;
  });
  const [autoClickCost, setAutoClickCost] = useState(() => {
    return parseInt(localStorage.getItem('autoClickCost')) || 15;
  });
  const [autoClickMultiplier, setAutoClickMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('autoClickMultiplier')) || 1;
  });
  const [autoClickMultiplierCost, setAutoClickMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('autoClickMultiplierCost')) || 500;
  });
  const [nextAutoClickMultiplierBreakpoint, setNextAutoClickMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextAutoClickMultiplierBreakpoint')) || 2;
  });

  // Factories

  const [factories, setFactories] = useState(() => {
    return parseInt(localStorage.getItem('factories')) || 0;
  });
  const [factoriesCost, setFactoriesCost] = useState(() => {
    return parseInt(localStorage.getItem('factoriesCost')) || 45;
  });
  const [factoriesMultiplier, setFactoriesMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('factoriesMultiplier')) || 1;
  });
  const [factoriesMultiplierCost, setFactoriesMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('factoriesMultiplierCost')) || 1500;
  });
  const [nextFactoriesMultiplierBreakpoint, setNextFactoriesMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextFactoriesMultiplierBreakpoint')) || 2;
  });

  //click-plants

  const [clickPlants, setClickPlants] = useState(() => {
    return parseInt(localStorage.getItem('clickPlants')) || 0;
  });
  const [clickPlantsCost, setClickPlantsCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsCost')) || 150;
  });
  const [clickPlantsMultiplier, setClickPlantsMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsMultiplier')) || 1;
  });
  const [clickPlantsMultiplierCost, setClickPlantsMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsMultiplierCost')) || 5000;
  });
  const [nextClickPlantsMultiplierBreakpoint, setNextClickPlantsMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextClickPlantsMultiplierBreakpoint')) || 2;
  });

  // click-portals

  const [clickPortals, setClickPortals] = useState(() => {
    return parseInt(localStorage.getItem('clickPortals')) || 0;
  });
  const [clickPortalsCost, setClickPortalsCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsCost')) || 1500;
  });
  const [clickPortalsMultiplier, setClickPortalsMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsMultiplier')) || 1;
  });
  const [clickPortalsMultiplierCost, setClickPortalsMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsMultiplierCost')) || 50000;
  });
  const [nextClickPortalsMultiplierBreakpoint, setNextClickPortalsMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextClickPortalsMultiplierBreakpoint')) || 2;
  });

  useEffect(() => {
    localStorage.setItem('clicks', clicks);

    localStorage.setItem('manualClickUpgrade', manualClickUpgrade);
    localStorage.setItem('manualClickUpgradeCost', manualClickUpgradeCost);

    localStorage.setItem('autoClicks', autoClicks);
    localStorage.setItem('autoClickCost', autoClickCost);
    localStorage.setItem('autoClickMultiplier', autoClickMultiplier);
    localStorage.setItem('autoClickMultiplierCost', autoClickMultiplierCost);
    localStorage.setItem('nextAutoClickMultiplierBreakpoint', nextAutoClickMultiplierBreakpoint);

    localStorage.setItem('factories', factories);
    localStorage.setItem('factoriesCost', factoriesCost);
    localStorage.setItem('factoriesMultiplier', factoriesMultiplier);
    localStorage.setItem('factoriesMultiplierCost', factoriesMultiplierCost);
    localStorage.setItem('nextFactoriesMultiplierBreakpoint', nextFactoriesMultiplierBreakpoint);

    localStorage.setItem('clickPlants', clickPlants);
    localStorage.setItem('clickPlantsCost', clickPlantsCost);
    localStorage.setItem('clickPlantsMultiplier', clickPlantsMultiplier);
    localStorage.setItem('clickPlantsMultiplierCost', clickPlantsMultiplierCost);
    localStorage.setItem('nextClickPlantsMultiplierBreakpoint', nextClickPlantsMultiplierBreakpoint);

    localStorage.setItem('clickPortals', clickPortals);
    localStorage.setItem('clickPortalsCost', clickPortalsCost);
    localStorage.setItem('clickPortalsMultiplier', clickPortalsMultiplier);
    localStorage.setItem('clickPortalsMultiplierCost', clickPortalsMultiplierCost);
    localStorage.setItem('nextClickPortalsMultiplierBreakpoint', nextClickPortalsMultiplierBreakpoint);

  }, [clicks, autoClicks, autoClickCost, autoClickMultiplier, autoClickMultiplierCost, nextAutoClickMultiplierBreakpoint, factories, factoriesCost, factoriesMultiplier,
    factoriesMultiplierCost, nextFactoriesMultiplierBreakpoint, clickPlants, clickPlantsCost, clickPlantsMultiplier, clickPlantsMultiplierCost,
    nextClickPlantsMultiplierBreakpoint, manualClickUpgrade, manualClickUpgradeCost, clickPortals, clickPortalsCost, clickPortalsMultiplier, clickPortalsMultiplierCost,
    nextClickPortalsMultiplierBreakpoint]);

  // Functions

  const handleClick = () => {
    const manualClickValue = Math.round(0.1 * ((autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * 3) + (clickPlants * clickPlantsMultiplier * 10) + (clickPortals * clickPortalsMultiplier * 100))) * manualClickUpgrade;
    setClicks(clicks + 1 + manualClickValue);
  };

  const cheatClick = () => {
    setClicks(clicks + 50000);
  };

  useInterval(() => {
    setClicks(clicks + (autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * 3) + (clickPlants * clickPlantsMultiplier * 10) + (clickPortals * clickPortalsMultiplier * 100));
  }, 1000);

  // Resets

  const quickReset = () => {
    setClicks(0);

    setManualClickUpgrade(0);
    setManualClickUpgradeCost(1000);

    setAutoClicks(0);
    setAutoClickCost(15);
    setAutoClickMultiplier(1);
    setAutoClickMultiplierCost(500);
    setNextAutoClickMultiplierBreakpoint(2);

    setFactories(0);
    setFactoriesCost(45);
    setFactoriesMultiplier(1);
    setFactoriesMultiplierCost(1500);
    setNextFactoriesMultiplierBreakpoint(2);

    setClickPlants(0);
    setClickPlantsCost(150);
    setClickPlantsMultiplier(1);
    setClickPlantsMultiplierCost(5000);
    setNextClickPlantsMultiplierBreakpoint(2);

    setClickPortals(0);
    setClickPortalsCost(1500);
    setClickPortalsMultiplier(1);
    setClickPortalsMultiplierCost(50000);
    setNextClickPortalsMultiplierBreakpoint(2);

  };

  const hardReset = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      quickReset();
      localStorage.removeItem('clicks');
      localStorage.removeItem('autoClicks');
      localStorage.removeItem('factories');
    }
  };

  // Upgrade Purchase

  const buyAutoClickUpgrade = () => {
    if (clicks >= autoClickCost) {
      setClicks(clicks - autoClickCost);
      setAutoClicks(autoClicks + 1);
      setAutoClickCost(Math.round(autoClickCost * 1.25));
    }
  };

  const buyAutoClickMultiplier = () => {
    if (clicks >= autoClickMultiplierCost && autoClicks >= nextAutoClickMultiplierBreakpoint) {
      setClicks(clicks - autoClickMultiplierCost);
      setAutoClickMultiplier(autoClickMultiplier + 1);
      setAutoClickMultiplierCost(Math.round(autoClickMultiplierCost * 1.5));
      setNextAutoClickMultiplierBreakpoint(nextAutoClickMultiplierBreakpoint * 4);
    }
  };

  const buyFactoryUpgrade = () => {
    if (clicks >= factoriesCost) {
      setClicks(clicks - factoriesCost);
      setFactories(factories + 1);
      setFactoriesCost(Math.round(factoriesCost * 1.25));
    }
  };

  const buyFactoryMultiplier = () => {
    if (clicks >= factoriesMultiplierCost && factories >= nextFactoriesMultiplierBreakpoint) {
      setClicks(clicks - factoriesMultiplierCost);
      setFactoriesMultiplier(factoriesMultiplier + 1);
      setFactoriesMultiplierCost(Math.round(factoriesMultiplierCost * 1.5));
      setNextFactoriesMultiplierBreakpoint(nextFactoriesMultiplierBreakpoint * 4);
    }
  };

  const buyClickPlantUpgrade = () => {
    if (clicks >= clickPlantsCost) {
      setClicks(clicks - clickPlantsCost);
      setClickPlants(clickPlants + 1);
      setClickPlantsCost(Math.round(clickPlantsCost * 1.25));
    }
  };

  const buyClickPlantMultiplier = () => {
    if (clicks >= clickPlantsMultiplierCost && clickPlants >= nextClickPlantsMultiplierBreakpoint) {
      setClicks(clicks - clickPlantsMultiplierCost);
      setClickPlantsMultiplier(clickPlantsMultiplier + 1);
      setClickPlantsMultiplierCost(Math.round(clickPlantsMultiplierCost * 1.5));
      setNextClickPlantsMultiplierBreakpoint(nextClickPlantsMultiplierBreakpoint * 4);
    }
  };

  const buyManualClickUpgrade = () => {
    if (clicks >= manualClickUpgradeCost) {
      setClicks(clicks - manualClickUpgradeCost);
      setManualClickUpgrade(manualClickUpgrade + 1);
      setManualClickUpgradeCost(Math.round(manualClickUpgradeCost * 10));
    }
  };

  const buyClickPortalUpgrade = () => {
    if (clicks >= clickPortalsCost) {
      setClicks(clicks - clickPortalsCost);
      setClickPortals(clickPortals + 1);
      setClickPortalsCost(Math.round(clickPortalsCost * 1.25));
    }
  };

  const buyClickPortalMultiplier = () => {
    if (clicks >= clickPortalsMultiplierCost && clickPortals >= nextClickPortalsMultiplierBreakpoint) {
      setClicks(clicks - clickPortalsMultiplierCost);
      setClickPortalsMultiplier(clickPortalsMultiplier + 1);
      setClickPortalsMultiplierCost(Math.round(clickPortalsMultiplierCost * 1.5));
      setNextClickPortalsMultiplierBreakpoint(nextClickPortalsMultiplierBreakpoint * 4);
    }
  };


  // JSX

  return (
    <div>
      <h1>Bedi Clicker</h1>
      <div>clicks: {clicks}</div>
      <div>
        clicks per sec {(autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * 3) + (clickPlants * clickPlantsMultiplier * 10) + (clickPortals * clickPortalsMultiplier * 100)}
      </div>
      <br></br>

      <button onClick={handleClick}>Click me</button><br></br>
      <button onClick={cheatClick}>Dev click</button><br></br>
      <button onClick={buyAutoClickUpgrade} disabled={clicks < autoClickCost}>Buy auto-click - {autoClicks} | cost: {autoClickCost}</button>
      <button onClick={buyFactoryUpgrade} disabled={clicks < factoriesCost}>Buy factory - {factories} | cost: {factoriesCost}</button>
      <button onClick={buyClickPlantUpgrade} disabled={clicks < clickPlantsCost}>Buy click-plant - {clickPlants} | cost: {clickPlantsCost}</button>
      <button onClick={buyClickPortalUpgrade} disabled={clicks < clickPortalsCost}>Buy click-portal - {clickPortals} | cost: {clickPortalsCost}</button>

      <br></br>

      <button
        onClick={buyAutoClickMultiplier}
        disabled={autoClicks < nextAutoClickMultiplierBreakpoint || clicks < autoClickMultiplierCost}
      >
        Upgrade autoclick multiplier - {autoClickMultiplier} | cost: {autoClickMultiplierCost}
      </button>
      <button
        onClick={buyFactoryMultiplier}
        disabled={factories < nextFactoriesMultiplierBreakpoint || clicks < factoriesMultiplierCost}
      >
        Upgrade factories multiplier - {factoriesMultiplier} | cost: {factoriesMultiplierCost}
      </button>

      <button
        onClick={buyClickPlantMultiplier}
        disabled={clickPlants < nextClickPlantsMultiplierBreakpoint || clicks < clickPlantsMultiplierCost}
      >
        Upgrade click-plants multiplier - {clickPlantsMultiplier} | cost: {clickPlantsMultiplierCost}
      </button>

      <button
        onClick={buyClickPortalMultiplier}
        disabled={clickPortals < nextClickPortalsMultiplierBreakpoint || clicks < clickPortalsMultiplierCost}
      >
        Upgrade click-portals multiplier - {clickPortalsMultiplier} | cost: {clickPortalsMultiplierCost}
      </button>
      <br></br>
      <button onClick={buyManualClickUpgrade} disabled={clicks < manualClickUpgradeCost}>Manual click value - {manualClickUpgrade * 10 + '%'} | cost: {manualClickUpgradeCost}</button>

      <br></br><br></br>
      <button onClick={quickReset}>dev reset</button>
      <button onClick={hardReset}>hard reset</button>
    </div>
  );
};

export default App;
