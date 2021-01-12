import React from 'react';
import { Nav } from './Nav';
import { Elevator } from './Elevator';
import { Footer } from './Footer';
import { buildingData } from './buildingData';

export function App() {
  return (
    <div id="container">
      <Nav buildings={buildingData} />
      <Elevator buildings={buildingData} />
      <Footer currentBuilding="Century Building" />
    </div>
  );
}

/**
 *
 * Render Elevator, Footer based on which building is selected, defaulting to default
 * Do the same for which Nav is active
 * Give each button the ability to change state
 * Hook in localStorage to each state change
 *
 */
