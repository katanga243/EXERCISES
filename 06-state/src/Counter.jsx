import { useState } from 'react';

// Counter: demonstrates useState. We never mutate state directly — we always
// call the updater function (setCount) to produce a new value. Using the
// functional form (prev => prev + 1) is the safe way to update based on the
// previous state.
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
