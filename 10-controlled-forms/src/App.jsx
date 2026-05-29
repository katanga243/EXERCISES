/*
  Exercise 10 - Controlled Forms

  In a controlled component, the input's value comes from React state and every
  keystroke updates that state via onChange. InteractiveWelcome shows a live
  greeting from a controlled input. Login keeps username/password/remember in
  state, disables the login button until username and password are filled, calls
  onLogin on submit (with preventDefault), and can reset all fields.
*/

import InteractiveWelcome from './InteractiveWelcome.jsx';
import Login from './Login.jsx';

function App() {
  const handleLogin = (state) => {
    console.log('Logging in with:', state);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
