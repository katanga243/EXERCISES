/*
  Exercise 07 - useEffect

  useEffect lets a component run side effects after render. It takes a function
  and a dependency array; the function runs when a dependency changes. Returning
  a function from the effect provides cleanup (run on unmount or before re-running
  the effect).

  - Counter logs its value to the console via a useEffect that depends on counter.
  - Clock uses useEffect to start an interval that updates the time every second,
    cleaning up the interval on unmount.
*/

import Counter from './Counter.jsx';
import Clock from './Clock.jsx';

function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Clock />
    </div>
  );
}

export default App;
