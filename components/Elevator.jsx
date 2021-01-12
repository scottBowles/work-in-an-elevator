import React from 'react';
import { ElevatorBtn } from './ElevatorBtn';

export function Elevator({ building }) {
  return (
    <main>
      <div className="buildingView">
        <div className="container">
          <ol className="buttonsContainer">
            {building.buttons.map((btn) => (
              <li className="elevatorButtonContainer" key={building.slug + btn}>
                <ElevatorBtn localStorageKey={building.slug + btn} text={btn} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
