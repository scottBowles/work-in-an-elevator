import React, { useEffect } from 'react';
import { resetOnNewDate, useLocalStorage } from '../utils';

export function ElevatorBtn({ localStorageKey, text, square }) {
  const [completed, setCompleted] = useLocalStorage(localStorageKey, false);

  const resetState = () => setCompleted(false);

  useEffect(() => {
    resetOnNewDate(resetState);
  }, []);

  return (
    <button
      type="button"
      className={`${completed && 'completed'} ${square && 'square'}`}
      onClick={() => setCompleted((prevState) => !prevState)}
    >
      {text}
    </button>
  );
}
