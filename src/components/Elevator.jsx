import React from 'react';
import { ElevatorBtn } from './ElevatorBtn';

export function Elevator({ building }) {
  return (
    <div className="elevator">
      <ol>
        {building.buttons.map((btn, i) =>
          btn === '' ? (
            <li key={building.slug + btn + i} />
          ) : (
            <li key={building.slug + btn}>
              <ElevatorBtn
                square={building.slug === 'century'}
                localStorageKey={building.slug + btn}
                text={btn}
              />
            </li>
          )
        )}
      </ol>
    </div>
  );
}
