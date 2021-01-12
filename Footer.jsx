import React from 'react';

export function Footer({ currentBuilding }) {
  return (
    <footer>
      <div className="bottomText">{currentBuilding}</div>
      <div className="bottom" />
    </footer>
  );
}
