import React from 'react';

export function Footer({ building }) {
  return (
    <footer>
      <div className="bottomText">{building.name}</div>
      <div className="bottom" />
    </footer>
  );
}
