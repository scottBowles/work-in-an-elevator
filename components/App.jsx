import React, { useState } from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from '../buildingData';

export function App() {
  const [building, setBuilding] = useState(buildingData.eighthAndPenn);

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

/**
 *
 * Give each button the ability to change state
 * Hook in localStorage to each state change
 *
 */
