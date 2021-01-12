import React from 'react';
import { useLocalStorage } from '../useLocalStorage';

export function ElevatorBtn({ localStorageKey, text }) {
  const [completed, setCompleted] = useLocalStorage(localStorageKey, false);
  return (
    <button
      type="button"
      className={`elevatorButton ${completed && 'completed'}`}
      onClick={() => setCompleted((prevState) => !prevState)}
    >
      {text}
    </button>
  );
}
