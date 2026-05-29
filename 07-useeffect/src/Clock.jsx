import { useState, useEffect } from 'react';

// Clock renders the current time inside an h2. A useEffect sets up an interval
// that updates the time every second, and returns a cleanup function that clears
// the interval when the component unmounts (so we don't leak timers).
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}

export default Clock;
