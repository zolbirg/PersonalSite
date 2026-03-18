import { useEffect, useState } from 'react';
import { calcTravelDuration } from './travelDuration.js';

export function useTravelDuration(refreshEveryMs = 60 * 60 * 1000) {
  const [duration, setDuration] = useState(() => calcTravelDuration());

  useEffect(() => {
    const id = setInterval(() => setDuration(calcTravelDuration()), refreshEveryMs);
    return () => clearInterval(id);
  }, [refreshEveryMs]);

  return duration;
}

