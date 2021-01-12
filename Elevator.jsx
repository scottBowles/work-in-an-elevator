import React from 'react';
import { Building } from './Building';

export function Elevator({ buildings }) {
  return (
    <main>
      {buildings.map((building) => (
        <Building building={building} />
      ))}
    </main>
  );
}
