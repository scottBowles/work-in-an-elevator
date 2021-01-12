import React from 'react';

export function Nav({ buildings }) {
  return (
    <nav>
      <ul className="navItems">
        {buildings.map((building, index) => (
          <li className="navItem" key={index}>
            <button className={`tab ${building.isDefault && 'selected'}`}>
              {building.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
