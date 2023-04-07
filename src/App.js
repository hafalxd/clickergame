import React from 'react';
import { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';

import './App.css';

const App = () => {

  const [clicks, setClicks] = useState(() => {
    return parseInt(localStorage.getItem('clicks')) || 0;
  });

  const [autoClicks, setAutoClicks] = useState(0);
  const [autoClickCost, setAutoClickCost] = useState(15);
  const [autoClickMultiplier, setAutoClickMultiplier] = useState(1);
  const [autoClickMultiplierCost, setAutoClickMultiplierCost] = useState(500);

  const [factories, setFactories] = useState(0);
  const [factoriesCost, setFactoriesCost] = useState(35);
  const [factoriesMultiplier, setFactoriesMultiplier] = useState(1);
  const [factoriesMultiplierCost, setFactoriesMultiplierCost] = useState(1500);

  useEffect(() => {
    const savedAutoClicks = parseInt(localStorage.getItem('autoClicks'));
    if (savedAutoClicks) {
      setAutoClicks(savedAutoClicks);
    }
  }, []);

  useEffect(() => {
    const savedFactories = parseInt(localStorage.getItem('factories'));
    if (savedFactories) {
      setFactories(savedFactories);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('autoClicks', autoClicks);
    localStorage.setItem('factories', factories);
  }, [clicks, autoClicks, factories]);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  useInterval(() => {
    setClicks(clicks + (autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * 3));
  }, 1000);

  const quickReset = () => {
    setClicks(0);
    setAutoClicks(0);
    setAutoClickCost(15);
    setAutoClickMultiplier(1);
    setAutoClickMultiplierCost(500);
    setFactories(0);
    setFactoriesCost(35);
    setFactoriesMultiplier(1);
    setAutoClickMultiplierCost(1500);
  };

  const hardReset = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      quickReset();
      localStorage.removeItem('clicks');
      localStorage.removeItem('autoClicks');
      localStorage.removeItem('factories');
    }
  };

  const buyAutoClickUpgrade = () => {
    if (clicks >= autoClickCost) {
      setClicks(clicks - autoClickCost);
      setAutoClicks(autoClicks + 1);
      setAutoClickCost(Math.round(autoClickCost * 1.15));
    }
  };

  const buyFactoryUpgrade = () => {
    if (clicks >= factoriesCost) {
      setClicks(clicks - factoriesCost);
      setFactories(factories + 1);
      setFactoriesCost(Math.round(factoriesCost * 1.25));
    }
  };

  const buyAutoClickMultiplier = () => {
    if (clicks >= autoClickMultiplierCost) {
      setClicks(clicks - autoClickMultiplierCost);
      setAutoClickMultiplier(autoClickMultiplier + 1);
      setAutoClickMultiplierCost(Math.round(autoClickMultiplierCost * 1.5));
    }
  };

  const buyFactoryMultiplier = () => {
    if (clicks >= factoriesMultiplierCost) {
      setClicks(clicks - factoriesMultiplierCost);
      setFactoriesMultiplier(factoriesMultiplier + 1);
      setFactoriesMultiplierCost(Math.round(factoriesMultiplierCost * 1.5));
    }
  };

  return (
    <div>
      <h1>Bedi Clicker</h1>
      <div>clicks: {clicks}</div>
      <div>clicks per sec {(autoClicks * autoClickMultiplier) + (factories * factoriesMultiplier * 3)}</div><br></br>

      <div>autoclicks: {autoClicks}</div>
      <div>factories {factories}</div>

      <button onClick={handleClick}>Click me</button>
      <button onClick={buyAutoClickUpgrade}>Upgrade autoclick | cost: {autoClickCost}</button>
      <button onClick={buyFactoryUpgrade}>Upgrade autoclick | cost: {factoriesCost}</button>

      <br></br>

      <button onClick={buyAutoClickMultiplier}>Upgrade autoclick | cost: {autoClickMultiplierCost}</button>
      <button onClick={buyFactoryMultiplier}>Upgrade autoclick | cost: {factoriesMultiplierCost}</button>

      <br></br><br></br>
      <button onClick={quickReset}>dev reset</button>
      <button onClick={hardReset}>hard reset</button>
    </div>
  );
};

export default App;
