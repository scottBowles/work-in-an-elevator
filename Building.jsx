import React from 'react';

export function Building({ building }) {
  return (
    <div className={`buildingView ${building.isDefault || 'hidden'}`}>
      <div className="container">
        <ol className="buttonsContainer">
          {building.buttons.map((btn) => (
            <li className="elevatorButtonContainer">
              <button className="elevatorButton">{btn}</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
