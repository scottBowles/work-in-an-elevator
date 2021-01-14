import React from 'react';

export function BuildingScreen({ building, children }) {
  return <div className={`building ${building.slug}`}>{children}</div>;
}
