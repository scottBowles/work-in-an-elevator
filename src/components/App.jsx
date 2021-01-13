import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from '../buildingData';
import { resetOnNewDate, useLocalStorage } from '../utils';

export function App() {
  const defaultBuilding = buildingData.eighthAndPenn;
  const [building, setBuilding] = useLocalStorage(
    'currentBuilding',
    defaultBuilding
  );

  const resetState = () => {
    setBuilding(defaultBuilding);
  };

  useEffect(() => {
    resetOnNewDate(resetState);
  }, []);

  return (
    <div id="container" className={building.slug}>
      <Nav
        buildings={buildingData}
        currentBuilding={building}
        changeBuilding={(buildingKey) => setBuilding(buildingData[buildingKey])}
      />
      <Elevator building={building} />
      <Footer building={building} />
    </div>
  );
}
