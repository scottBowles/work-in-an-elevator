import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from '../buildingData';
import { resetOnNewDate, useLocalStorage } from '../utils';
import { BuildingScreen } from './BuildingScreen';

export function App() {
  const defaultBuilding = buildingData[0];
  const [currentBuilding, setCurrentBuilding] = useLocalStorage(
    'currentBuilding',
    defaultBuilding
  );

  const resetState = () => {
    setCurrentBuilding(defaultBuilding);
  };

  const scrollToBuildingScreen = (id, behavior) => {
    const container = document.querySelector('.container');
    container.scroll({
      top: 0,
      left: id * window.innerWidth,
      behavior,
    });
  };

  useEffect(() => {
    resetOnNewDate(resetState);
    scrollToBuildingScreen(currentBuilding.id, 'auto');
  }, []);

  const handleScroll = (event) => {
    const { scrollLeft, offsetWidth } = event.target;
    if (scrollLeft === offsetWidth) {
      setCurrentBuilding(buildingData[1]);
    } else if (scrollLeft === 0) {
      setCurrentBuilding(buildingData[0]);
    }
  };

  const changeBuilding = (id) => {
    const clickedBuilding = buildingData.find((el) => el.id === id);
    if (clickedBuilding === undefined) return;
    scrollToBuildingScreen(id, 'smooth');
    setCurrentBuilding(clickedBuilding);
  };

  return (
    <div className="container" onScroll={handleScroll}>
      {buildingData.map((building) => (
        <BuildingScreen building={building} key={building.id}>
          <Nav
            buildings={buildingData}
            currentBuilding={building}
            changeBuilding={changeBuilding}
          />
          <Elevator building={building} />
          <Footer building={building} />
        </BuildingScreen>
      ))}
    </div>
  );
}
