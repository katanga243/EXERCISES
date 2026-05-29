/*
  Exercise 05 - Events

  Q: How do you handle events in React?
  A: React uses camelCase event props (e.g. onClick, onChange) and you pass a
     FUNCTION REFERENCE as the handler, e.g. onClick={showTime}. You do NOT call
     the function inline (onClick={showTime()} would run it during render), and
     you avoid inlining the whole logic so the handler stays reusable and readable.
*/

import EventButton from './EventButton.jsx';

function App() {
  return (
    <div>
      <EventButton />
    </div>
  );
}

export default App;
