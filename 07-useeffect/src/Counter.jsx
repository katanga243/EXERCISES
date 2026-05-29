import { useState, useEffect } from 'react';

// Counter renders the counter value inside an h2 and increments it on click.
// The initial value and the increment amount are received as props. A useEffect
// with [counter] in its dependency array prints the current counter value to the
// console every time it changes.
function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log('Current counter value:', counter);
  }, [counter]);

  const handleIncrement = () => setCounter((prev) => prev + increment);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
