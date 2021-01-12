import React from 'react';

export function Footer({ building }) {
  return (
    <footer>
      <div className={`bottomText ${building.slug}`}>{building.shortName}</div>
      <div className="bottom" />
    </footer>
  );
}
