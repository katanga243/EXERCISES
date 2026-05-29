/*
  Exercise 05 - Events (AlertClock)

  The click handler (showCurrentTime) is defined HERE in App and passed down to
  AlertClock as a prop (onShowTime). The child only receives the handler by
  reference — it does not implement the logic itself. React event names use
  camelCase (onClick).
*/

import AlertClock from './AlertClock.jsx';

function App() {
  function showCurrentTime() {
    const now = new Date();
    alert('The current time is: ' + now.toLocaleTimeString());
  }

  return (
    <div>
      <AlertClock onShowTime={showCurrentTime} />
    </div>
  );
}

export default App;
