import React from 'react';

export function Footer({ building }) {
  return (
    <footer>
      <div className={`footerText ${building.slug}`}>{building.shortName}</div>
      <div className="bottomBar" />
    </footer>
  );
}
