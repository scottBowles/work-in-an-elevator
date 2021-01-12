import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from '../buildingData';
import { useLocalStorage } from '../useLocalStorage';

export function App() {
  const [building, setBuilding] = useLocalStorage(
    'currentBuilding',
    buildingData.eighthAndPenn
  );

  useEffect(() => {
    try {
      const storedDate = window.localStorage.getItem('date');
      const currentDate = new Date().toDateString();
      if (storedDate !== currentDate) {
        window.localStorage.clear();
        window.localStorage.setItem('date', currentDate);
      }
    } catch (e) {
      console.log(e);
    }
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
