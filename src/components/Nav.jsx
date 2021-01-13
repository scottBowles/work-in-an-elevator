import React from 'react';

export function Nav({ buildings, currentBuilding, changeBuilding }) {
  return (
    <nav>
      <ul>
        {Object.values(buildings).map((building, index) => (
          <li key={index}>
            <button
              type="button"
              className={building.slug === currentBuilding.slug && 'selected'}
              onClick={() => changeBuilding(building.slug)}
            >
              {building.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
