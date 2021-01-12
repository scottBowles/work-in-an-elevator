import React from 'react';

export function Nav({ buildings, currentBuilding, changeBuilding }) {
  return (
    <nav>
      <ul className="navItems">
        {Object.values(buildings).map((building, index) => (
          <li className="navItem" key={index}>
            <button
              type="button"
              className={`tab ${
                building.slug === currentBuilding.slug && 'selected'
              } ${currentBuilding.slug}`}
              onClick={() => {
                changeBuilding(building.slug);
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
