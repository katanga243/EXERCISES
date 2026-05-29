/*
  Exercise 12 - Refs

  useRef gives you a mutable container whose .current value persists across
  renders without causing re-renders. Two uses here:
  - FocusableInput: a ref to a DOM input, focused automatically on mount.
  - MountLogger: a ref used as a flag so a message is logged only on the first
    mount, even though StrictMode runs effects twice in development.
*/

import FocusableInput from './FocusableInput.jsx';
import MountLogger from './MountLogger.jsx';

function App() {
  return (
    <div>
      <FocusableInput />
      <MountLogger />
    </div>
  );
}

export default App;
