import React from 'react';
import { ElevatorBtn } from './ElevatorBtn';

export function Elevator({ building }) {
  return (
    <main>
      <div className="elevator">
        <ol>
          {building.buttons.map((btn) =>
            btn === '' ? (
              <li />
            ) : (
              <li key={building.slug + btn}>
                <ElevatorBtn localStorageKey={building.slug + btn} text={btn} />
              </li>
            )
          )}
        </ol>
      </div>
    </main>
  );
}
