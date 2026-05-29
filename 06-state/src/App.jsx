/*
  Exercise 06 - State

  Q: What is state and why not mutate it directly?
  A: State is data a component remembers between renders. useState returns the
     current value and a setter. You must use the setter (never mutate the value
     directly), because React only re-renders when it detects a new value via the
     setter. Mutating directly skips the re-render and breaks the UI.
*/

import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
