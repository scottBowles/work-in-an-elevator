import React from 'react';

export function Nav({ buildings, currentBuilding, changeBuilding }) {
  return (
    <nav>
      <ul className="navItems">
        {Object.entries(buildings).map(([buildingKey, building], index) => (
          <li className="navItem" key={index}>
            <button
              type="button"
              className={`tab ${building === currentBuilding && 'selected'} ${
                currentBuilding.slug
              }`}
              onClick={() => {
                changeBuilding(buildingKey);
              }}
            >
              {building.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
