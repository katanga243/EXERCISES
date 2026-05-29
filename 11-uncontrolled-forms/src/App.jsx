/*
  Exercise 11 - Uncontrolled Forms

  An uncontrolled form lets the DOM hold the input values; React reads them only
  when needed (on submit) instead of tracking every keystroke in state.
  UncontrolledLogin demonstrates reading values three ways: via useRef, via the
  DOM API (event.target.elements), and via the FormData API.
*/

import UncontrolledLogin from './UncontrolledLogin.jsx';

function App() {
  return (
    <div>
      <UncontrolledLogin />
    </div>
  );
}

export default App;
