import { useState } from 'react';
import CounterDisplay from './CounterDisplay.jsx';

// Counter holds a 'counter' state variable. Its initial value and the increment
// amount are received as props (initialValue, increment). State is never mutated
// directly — we always call setCounter with the functional updater form.
function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => setCounter((prev) => prev + increment);
  const handleDecrement = () => setCounter((prev) => prev - increment);
  const handleReset = () => setCounter(initialValue);

  return (
    <div>
      <h1>Counter</h1>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
