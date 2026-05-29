/*
  Exercise 06 - State

  Counter keeps a 'counter' state value. We never mutate state directly — we use
  the setter (setCounter) so React re-renders. The initial value and increment
  amount are passed in as props here from App. CounterDisplay (a child) shows the
  current value via a 'count' prop.
*/

import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
    </div>
  );
}

export default App;
