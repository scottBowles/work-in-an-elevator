import React, { useEffect } from 'react';
import { resetOnNewDate, useLocalStorage } from '../utils';

export function ElevatorBtn({ localStorageKey, text }) {
  const [completed, setCompleted] = useLocalStorage(localStorageKey, false);

  const resetState = () => setCompleted(false);

  useEffect(() => {
    resetOnNewDate(resetState);
  }, []);

  return (
    <button
      type="button"
      className={completed && 'completed'}
      onClick={() => setCompleted((prevState) => !prevState)}
    >
      {text}
    </button>
  );
}
