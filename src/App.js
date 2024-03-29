import React from 'react';
import { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import Modal from 'react-modal';
import constants from './constants.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// TODO:
// Meaningful Resets and Prestige points
// Achievements


const App = () => {

  // Calculating offline clicks

  const [lastOnlineTimestamp, setLastOnlineTimestamp] = useState(() => {
    return parseInt(localStorage.getItem('lastOnlineTimestamp')) || Date.now();
  });

  // Local Storage

  const [clicks, setClicks] = useState(() => {
    return parseInt(localStorage.getItem('clicks')) || constants.initialClicks;
  });
  const [totalClicks, setTotalClicks] = useState(() => {
    return parseInt(localStorage.getItem('totalClicks')) || constants.initialTotalClicks;
  });
  const [totalManualClicks, setTotalManualClicks] = useState(() => {
    return parseInt(localStorage.getItem('totalManualClicks')) || constants.initialTotalManualClicks;
  });

  // Manual clicks

  const [manualClickUpgrade, setManualClickUpgrade] = useState(() => {
    return parseInt(localStorage.getItem('manualClickUpgrade')) || constants.initialManualClickUpgrade;
  });
  const [manualClickUpgradeCost, setManualClickUpgradeCost] = useState(() => {
    return parseInt(localStorage.getItem('manualClickUpgradeCost')) || constants.initialManualClickUpgradeCost;
  });

  // Auto clicks

  const [autoClicks, setAutoClicks] = useState(() => {
    return parseInt(localStorage.getItem('autoClicks')) || constants.initialAutoClicks;
  });
  const [autoClickCost, setAutoClickCost] = useState(() => {
    return parseInt(localStorage.getItem('autoClickCost')) || constants.initialAutoClickCost;
  });
  const [autoClickMultiplier, setAutoClickMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('autoClickMultiplier')) || constants.initialAutoClickMultiplier;
  });
  const [autoClickMultiplierCost, setAutoClickMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('autoClickMultiplierCost')) || constants.initialAutoClickMultiplierCost;
  });
  const [nextAutoClickMultiplierBreakpoint, setNextAutoClickMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextAutoClickMultiplierBreakpoint')) || constants.initialNextAutoClickMultiplierBreakpoint;
  });

  // Factories

  const [factories, setFactories] = useState(() => {
    return parseInt(localStorage.getItem('factories')) || constants.initialFactories;
  });
  const [factoriesCost, setFactoriesCost] = useState(() => {
    return parseInt(localStorage.getItem('factoriesCost')) || constants.initialFactoriesCost;
  });
  const [factoriesMultiplier, setFactoriesMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('factoriesMultiplier')) || constants.initialFactoriesMultiplier;
  });
  const [factoriesMultiplierCost, setFactoriesMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('factoriesMultiplierCost')) || constants.initialFactoriesMultiplierCost;
  });
  const [nextFactoriesMultiplierBreakpoint, setNextFactoriesMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextFactoriesMultiplierBreakpoint')) || constants.initialNextFactoriesMultiplierBreakpoint;
  });

  //click-plants

  const [clickPlants, setClickPlants] = useState(() => {
    return parseInt(localStorage.getItem('clickPlants')) || constants.initialClickPlants;
  });
  const [clickPlantsCost, setClickPlantsCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsCost')) || constants.initialClickPlantsCost;
  });
  const [clickPlantsMultiplier, setClickPlantsMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsMultiplier')) || constants.initialClickPlantsMultiplier;
  });
  const [clickPlantsMultiplierCost, setClickPlantsMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPlantsMultiplierCost')) || constants.initialClickPlantsMultiplierCost;
  });
  const [nextClickPlantsMultiplierBreakpoint, setNextClickPlantsMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextClickPlantsMultiplierBreakpoint')) || constants.initialNextClickPlantsMultiplierBreakpoint;
  });

  // click-portals

  const [clickPortals, setClickPortals] = useState(() => {
    return parseInt(localStorage.getItem('clickPortals')) || constants.initialClickPortals;
  });
  const [clickPortalsCost, setClickPortalsCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsCost')) || constants.initialClickPortalsCost;
  });
  const [clickPortalsMultiplier, setClickPortalsMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsMultiplier')) || constants.initialClickPortalsMultiplier;
  });
  const [clickPortalsMultiplierCost, setClickPortalsMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('clickPortalsMultiplierCost')) || constants.initialClickPortalsMultiplierCost;
  });
  const [nextClickPortalsMultiplierBreakpoint, setNextClickPortalsMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextClickPortalsMultiplierBreakpoint')) || constants.initialNextClickPortalsMultiplierBreakpoint;
  });

  // click-space-stations

  const [clickSpaceStations, setClickSpaceStations] = useState(() => {
    return parseInt(localStorage.getItem('clickSpaceStations')) || constants.initialClickSpaceStations;
  });
  const [clickSpaceStationCost, setClickSpaceStationCost] = useState(() => {
    return parseInt(localStorage.getItem('clickSpaceStationCost')) || constants.initialClickSpaceStationCost;
  });
  const [clickSpaceStationMultiplier, setClickSpaceStationMultiplier] = useState(() => {
    return parseInt(localStorage.getItem('clickSpaceStationMultiplier')) || constants.initialClickSpaceStationMultiplier;
  });
  const [clickSpaceStationMultiplierCost, setClickSpaceStationMultiplierCost] = useState(() => {
    return parseInt(localStorage.getItem('clickSpaceStationMultiplierCost')) || constants.initialClickSpaceStationMultiplierCost;
  });
  const [nextClickSpaceStationMultiplierBreakpoint, setNextClickSpaceStationMultiplierBreakpoint] = useState(() => {
    return parseInt(localStorage.getItem('nextClickSpaceStationMultiplierBreakpoint')) || constants.initialNextClickSpaceStationMultiplierBreakpoint;
  });

  useEffect(() => {
    localStorage.setItem('lastOnlineTimestamp', Date.now());
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('totalClicks', totalClicks);
    localStorage.setItem('totalManualClicks', totalManualClicks);

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

    localStorage.setItem('clickSpaceStations', clickSpaceStations);
    localStorage.setItem('clickSpaceStationCost', clickSpaceStationCost);
    localStorage.setItem('clickSpaceStationMultiplier', clickSpaceStationMultiplier);
    localStorage.setItem('clickSpaceStationMultiplierCost', clickSpaceStationMultiplierCost);
    localStorage.setItem('nextClickSpaceStationMultiplierBreakpoint', nextClickSpaceStationMultiplierBreakpoint);

  }, [clicks, totalClicks, totalManualClicks, autoClicks, autoClickCost, autoClickMultiplier, autoClickMultiplierCost, nextAutoClickMultiplierBreakpoint, factories, factoriesCost, factoriesMultiplier,
    factoriesMultiplierCost, nextFactoriesMultiplierBreakpoint, clickPlants, clickPlantsCost, clickPlantsMultiplier, clickPlantsMultiplierCost,
    nextClickPlantsMultiplierBreakpoint, manualClickUpgrade, manualClickUpgradeCost, clickPortals, clickPortalsCost, clickPortalsMultiplier, clickPortalsMultiplierCost,
    nextClickPortalsMultiplierBreakpoint, clickSpaceStations, clickSpaceStationCost, clickSpaceStationMultiplier, clickSpaceStationMultiplierCost, nextClickSpaceStationMultiplierBreakpoint]);

  // Functions

  const timeSinceLastOnline = Date.now() - lastOnlineTimestamp;
  const clicksPerSecond = (autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * constants.factoryProduction) + (clickPlants * clickPlantsMultiplier * constants.clickPlantProduction) + (clickPortals * clickPortalsMultiplier * constants.clickPortalProduction) + (clickSpaceStations * clickSpaceStationMultiplier * constants.clickSpaceStationProdcution);
  const offlineGeneratedClicks = Math.round(timeSinceLastOnline / 1000 * clicksPerSecond);

  useEffect(() => {
    setClicks(clicks + offlineGeneratedClicks);
  }, []);

  const calculateManualClickValue = () => {
    return Math.round(0.1 * clicksPerSecond) * manualClickUpgrade;
  };

  const handleClick = () => {
    const manualClickValue = calculateManualClickValue();
    setClicks(clicks + 1 + manualClickValue);
    setTotalManualClicks(totalManualClicks + 1);
    setTotalClicks(totalClicks + 1 + manualClickValue)
  };

  const cheatClick = () => {
    setClicks(clicks + 50000);
  };

  useInterval(() => {
    setClicks(clicks + clicksPerSecond);
  }, 1000);

  useInterval(() => {
    setTotalClicks(totalClicks + clicksPerSecond);
  }, 1000);

  // Resets

  const quickReset = () => {

    setClicks(constants.initialClicks);
    setTotalClicks(constants.initialTotalClicks);
    setTotalManualClicks(constants.initialTotalManualClicks);

    setManualClickUpgrade(constants.initialManualClickUpgrade);
    setManualClickUpgradeCost(constants.initialManualClickUpgradeCost);

    setAutoClicks(constants.initialAutoClicks);
    setAutoClickCost(constants.initialAutoClickCost);
    setAutoClickMultiplier(constants.initialAutoClickMultiplier);
    setAutoClickMultiplierCost(constants.initialAutoClickMultiplierCost);
    setNextAutoClickMultiplierBreakpoint(constants.initialNextAutoClickMultiplierBreakpoint);

    setFactories(constants.initialFactories);
    setFactoriesCost(constants.initialFactoriesCost);
    setFactoriesMultiplier(constants.initialFactoriesMultiplier);
    setFactoriesMultiplierCost(constants.initialFactoriesMultiplierCost);
    setNextFactoriesMultiplierBreakpoint(constants.initialNextFactoriesMultiplierBreakpoint);

    setClickPlants(constants.initialClickPlants);
    setClickPlantsCost(constants.initialClickPlantsCost);
    setClickPlantsMultiplier(constants.initialClickPlantsMultiplier);
    setClickPlantsMultiplierCost(constants.initialClickPlantsMultiplierCost);
    setNextClickPlantsMultiplierBreakpoint(constants.initialNextClickPlantsMultiplierBreakpoint);

    setClickPortals(constants.initialClickPortals);
    setClickPortalsCost(constants.initialClickPortalsCost);
    setClickPortalsMultiplier(constants.initialClickPortalsMultiplier);
    setClickPortalsMultiplierCost(constants.initialClickPortalsMultiplierCost);
    setNextClickPortalsMultiplierBreakpoint(constants.initialNextClickPortalsMultiplierBreakpoint);

    setClickSpaceStations(constants.initialClickSpaceStations);
    setClickSpaceStationCost(constants.initialClickSpaceStationCost);
    setClickSpaceStationMultiplier(constants.initialClickSpaceStationMultiplier);
    setClickSpaceStationMultiplierCost(constants.initialClickSpaceStationMultiplierCost);
    setNextClickSpaceStationMultiplierBreakpoint(constants.initialNextClickSpaceStationMultiplierBreakpoint);

    setLastOnlineTimestamp(Date.now());

  };

  const hardReset = () => {
    quickReset();
    localStorage.removeItem('clicks');
    localStorage.removeItem('autoClicks');
    localStorage.removeItem('factories');
  };

  // Upgrade Purchase

  const buyAutoClickUpgrade = () => {
    if (clicks >= autoClickCost) {
      setClicks(clicks - autoClickCost);
      setAutoClicks(autoClicks + 1);
      setAutoClickCost(Math.round(autoClickCost * constants.autoClickCostScaling));
    }
  };

  const buyAutoClickMultiplier = () => {
    if (clicks >= autoClickMultiplierCost && autoClicks >= nextAutoClickMultiplierBreakpoint) {
      setClicks(clicks - autoClickMultiplierCost);
      setAutoClickMultiplier(autoClickMultiplier + 1);
      setAutoClickMultiplierCost(Math.round(autoClickMultiplierCost * constants.autoClickCostMultiplierScaling));
      setNextAutoClickMultiplierBreakpoint(nextAutoClickMultiplierBreakpoint * constants.nextAutoClickMultiplierBreakpointScaling);
    }
  };

  const buyFactoryUpgrade = () => {
    if (clicks >= factoriesCost) {
      setClicks(clicks - factoriesCost);
      setFactories(factories + 1);
      setFactoriesCost(Math.round(factoriesCost * constants.factoriesCostScaling));
    }
  };

  const buyFactoryMultiplier = () => {
    if (clicks >= factoriesMultiplierCost && factories >= nextFactoriesMultiplierBreakpoint) {
      setClicks(clicks - factoriesMultiplierCost);
      setFactoriesMultiplier(factoriesMultiplier + 1);
      setFactoriesMultiplierCost(Math.round(factoriesMultiplierCost * constants.factoriesMultiplierCostScaling));
      setNextFactoriesMultiplierBreakpoint(nextFactoriesMultiplierBreakpoint * constants.nextFactoriesMultiplierBreakpointScaling);
    }
  };

  const buyClickPlantUpgrade = () => {
    if (clicks >= clickPlantsCost) {
      setClicks(clicks - clickPlantsCost);
      setClickPlants(clickPlants + 1);
      setClickPlantsCost(Math.round(clickPlantsCost * constants.clickPlantsCostScaling));
    }
  };

  const buyClickPlantMultiplier = () => {
    if (clicks >= clickPlantsMultiplierCost && clickPlants >= nextClickPlantsMultiplierBreakpoint) {
      setClicks(clicks - clickPlantsMultiplierCost);
      setClickPlantsMultiplier(clickPlantsMultiplier + 1);
      setClickPlantsMultiplierCost(Math.round(clickPlantsMultiplierCost * constants.clickPlantsMultiplierCostScaling));
      setNextClickPlantsMultiplierBreakpoint(nextClickPlantsMultiplierBreakpoint * constants.nextClickPlantsMultiplierBreakpointScaling);
    }
  };

  const buyManualClickUpgrade = () => {
    if (clicks >= manualClickUpgradeCost) {
      setClicks(clicks - manualClickUpgradeCost);
      setManualClickUpgrade(manualClickUpgrade + 1);
      setManualClickUpgradeCost(Math.round(manualClickUpgradeCost * constants.manualClickUpgradeCostScaling));
    }
  };

  const buyClickPortalUpgrade = () => {
    if (clicks >= clickPortalsCost) {
      setClicks(clicks - clickPortalsCost);
      setClickPortals(clickPortals + 1);
      setClickPortalsCost(Math.round(clickPortalsCost * constants.clickPortalsCostScaling));
    }
  };

  const buyClickPortalMultiplier = () => {
    if (clicks >= clickPortalsMultiplierCost && clickPortals >= nextClickPortalsMultiplierBreakpoint) {
      setClicks(clicks - clickPortalsMultiplierCost);
      setClickPortalsMultiplier(clickPortalsMultiplier + 1);
      setClickPortalsMultiplierCost(Math.round(clickPortalsMultiplierCost * constants.clickPortalsMultiplierCostScaling));
      setNextClickPortalsMultiplierBreakpoint(nextClickPortalsMultiplierBreakpoint * constants.nextClickPortalsMultiplierBreakpointScaling);
    }
  };

  const buyClickSpaceStationUpgrade = () => {
    if (clicks >= clickSpaceStationCost) {
      setClicks(clicks - clickSpaceStationCost);
      setClickSpaceStations(clickSpaceStations + 1);
      setClickSpaceStationCost(Math.round(clickSpaceStationCost * constants.clickSpaceStationCostScaling));
    }
  };

  const buyClickSpaceStationMultiplier = () => {
    if (clicks >= clickSpaceStationMultiplierCost && clickSpaceStations >= nextClickSpaceStationMultiplierBreakpoint) {
      setClicks(clicks - clickSpaceStationMultiplierCost);
      setClickSpaceStationMultiplier(clickSpaceStationMultiplier + 1);
      setClickSpaceStationMultiplierCost(Math.round(clickSpaceStationMultiplierCost * constants.clickSpaceStationMultiplierCostScaling));
      setNextClickSpaceStationMultiplierBreakpoint(nextClickSpaceStationMultiplierBreakpoint * constants.nextClickSpaceStationMultiplierBreakpointScaling);
    }
  };

  // User Interface functions

  const [showStats, setShowStats] = useState(true);
  const [showResetModal, setShowResetModal] = useState(false);

  const openResetModal = () => {
    setShowResetModal(true);
  };

  const closeResetModal = () => {
    setShowResetModal(false);
  };

  const confirmHardReset = () => {
    hardReset();
    closeResetModal();
  };

  // JSX

  return (
    <div className='container'>
      <h1>Bedi Clicker</h1>
      <div>clicks: {clicks}</div>
      <div>
        clicks per sec {clicksPerSecond}
      </div>

      <br></br>

      <div className="buttons-container">
        <button className="btn btn-primary" onClick={handleClick}>Click me</button>
        <button className="btn btn-secondary" onClick={cheatClick}>Dev click</button>
        <br></br>
        <div>Auto clicks: {autoClicks}  Multiplier: x{autoClickMultiplier}</div> <div> Next upgrade at {nextAutoClickMultiplierBreakpoint} auto clicks</div>
        <br></br>
        <button className="btn btn-info" onClick={buyAutoClickUpgrade} disabled={clicks < autoClickCost}>Buy auto-click | cost: {autoClickCost}</button>

        <button
          className="btn btn-success"
          onClick={buyAutoClickMultiplier}
          disabled={autoClicks < nextAutoClickMultiplierBreakpoint || clicks < autoClickMultiplierCost}
        >
          Upgrade autoclick multiplier | cost: {autoClickMultiplierCost}
        </button>
        <br></br>
        <p>Click factories: {factories}  Multiplier: x{factoriesMultiplier}</p> <p> Next upgrade at {nextFactoriesMultiplierBreakpoint} factories</p>
        <br></br>
        <button className="btn btn-info" onClick={buyFactoryUpgrade} disabled={clicks < factoriesCost}>Buy factory - {factories} | cost: {factoriesCost}</button>

        <button
          className="btn btn-success"
          onClick={buyFactoryMultiplier}
          disabled={factories < nextFactoriesMultiplierBreakpoint || clicks < factoriesMultiplierCost}
        >
          Upgrade factories multiplier - {factoriesMultiplier} | cost: {factoriesMultiplierCost}
        </button>
        <br></br>
        <p>Click plants: {clickPlants}  Multiplier: x{clickPlantsMultiplier}</p> <p>Next upgrade at {nextClickPlantsMultiplierBreakpoint} click plants</p>
        <br></br>
        <button className="btn btn-info" onClick={buyClickPlantUpgrade} disabled={clicks < clickPlantsCost}>Buy click-plant - {clickPlants} | cost: {clickPlantsCost}</button>

        <button
          className="btn btn-success"
          onClick={buyClickPlantMultiplier}
          disabled={clickPlants < nextClickPlantsMultiplierBreakpoint || clicks < clickPlantsMultiplierCost}
        >
          Upgrade click-plants multiplier - {clickPlantsMultiplier} | cost: {clickPlantsMultiplierCost}
        </button>
        <br></br>
        <p>Auto clicks: {autoClicks}  Multiplier: x{autoClickMultiplier}</p> <p> Next upgrade at {nextAutoClickMultiplierBreakpoint} auto clicks</p>
        <br></br>
        <button className="btn btn-info" onClick={buyClickPortalUpgrade} disabled={clicks < clickPortalsCost}>Buy click-portal - {clickPortals} | cost: {clickPortalsCost}</button>

        <button
          className="btn btn-success"
          onClick={buyClickPortalMultiplier}
          disabled={clickPortals < nextClickPortalsMultiplierBreakpoint || clicks < clickPortalsMultiplierCost}
        >
          Upgrade click-portals multiplier - {clickPortalsMultiplier} | cost: {clickPortalsMultiplierCost}
        </button>
        <br></br>
        <p>Auto clicks: {clickSpaceStations}  Multiplier: x{clickSpaceStationMultiplier}</p> <p>Next upgrade at {nextClickSpaceStationMultiplierBreakpoint} auto clicks</p>
        <br></br>
        
        <button className="btn btn-info" onClick={buyClickSpaceStationUpgrade} disabled={clicks < clickSpaceStationCost}>Buy click space-station - {clickSpaceStations} | cost: {clickSpaceStationCost}</button>
        
        <button
          className="btn btn-success"
          onClick={buyClickSpaceStationMultiplier}
          disabled={clickSpaceStations < nextClickSpaceStationMultiplierBreakpoint || clicks < clickSpaceStationMultiplierCost}
        >
          Upgrade click-space-station multiplier - {clickSpaceStationMultiplier} | cost: {clickSpaceStationMultiplierCost}
        </button>

        <br></br>
        <br></br>
        <button className="btn btn-warning" onClick={buyManualClickUpgrade} disabled={clicks < manualClickUpgradeCost}>Manual click value - {manualClickUpgrade * 10 + '%'} | cost: {manualClickUpgradeCost}</button>
        <br></br>
        <br></br>
        <button className="btn btn-danger" onClick={quickReset}>dev reset</button>
        <button className="btn btn-danger" onClick={openResetModal}>Hard Reset</button>

      </div>

      <Modal
        isOpen={showResetModal}
        onRequestClose={closeResetModal}
        contentLabel="Hard Reset Modal"
      >
        <div className="modal-content">
        <h2>Are you sure you want to hard reset?</h2>
        <button className="btn btn-danger" onClick={confirmHardReset}>Yes, hard reset</button>
        <button className="btn btn-secondary" onClick={closeResetModal}>No, go back</button>
        </div>
      </Modal>

      <br></br><br></br>

      <div>
        <button className="btn btn-secondary stats-button" onClick={() => setShowStats(!showStats)}>
          {showStats ? 'Hide Statistics' : 'Show Statistics'}
        </button>
        {showStats && (
          <div className="statistics">
            <h2>Statistics</h2>
            <div>Total online clicks: {totalClicks}</div>
            <div>Total manual clicks: {totalManualClicks}</div>
            <div>Manual click value: {1 + calculateManualClickValue()}</div>
            <br></br>

            <div>Auto-clicks production: {autoClicks * autoClickMultiplier}</div>
            <div>Click-Factories production: {factories * factoriesMultiplier * constants.factoryProduction}</div>
            <div>Click-Plants production: {clickPlants * clickPlantsMultiplier * constants.clickPlantProduction}</div>
            <div>Click-Portals production: {clickPortals * clickPortalsMultiplier * constants.clickPortalProduction}</div>
            <div>Click Space-Stations production: {clickSpaceStations * clickSpaceStationMultiplier * constants.clickSpaceStationProdcution}</div>
          </div>
        )}
      </div>

    </div>
  );
};

export default App;
