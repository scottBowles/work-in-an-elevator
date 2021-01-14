import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from '../buildingData';
import {
  resetOnNewDate,
  scrollToBuildingScreen,
  useLocalStorage,
} from '../utils';

export function App() {
  const defaultBuilding = buildingData[0];
  const [currentBuilding, setCurrentBuilding] = useLocalStorage(
    'currentBuilding',
    defaultBuilding
  );

  function resetState() {
    setCurrentBuilding(defaultBuilding);
  }

  function handleScroll(event) {
    const { scrollLeft, offsetWidth } = event.target;
    if (scrollLeft > offsetWidth / 2) {
      setCurrentBuilding(buildingData[1]);
    } else if (scrollLeft <= offsetWidth / 2) {
      setCurrentBuilding(buildingData[0]);
    }
  }

  function changeBuilding(id) {
    const clickedBuilding = buildingData.find((el) => el.id === id);
    if (clickedBuilding === undefined) return;
    scrollToBuildingScreen(id, 'smooth');
    // scroll will call setCurrentBuilding to set currentBuilding correctly
  }

  useEffect(() => {
    resetOnNewDate(resetState);
    scrollToBuildingScreen(currentBuilding.id, 'auto');
  }, []);

  return (
    <div className="container" onScroll={handleScroll}>
      <Nav
        buildings={buildingData}
        currentBuilding={currentBuilding}
        changeBuilding={changeBuilding}
      />
      {buildingData.map((building) => (
        <div className={`building ${building.slug}`} key={building.id}>
          <Elevator building={building} />
          <Footer building={building} />
        </div>
      ))}
    </div>
  );
}
