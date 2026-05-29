import { useState } from 'react';

// Login is a controlled form: username, password and the remember checkbox are
// all stored in state and synced via value/checked + onChange. The login button
// is disabled while username or password is empty. Submitting calls the onLogin
// prop with the current state. preventDefault stops the browser from reloading
// the page on form submit. Reset clears all three inputs.
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  const isDisabled = username === '' || password === '';

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        Remember me
      </label>
      <button type="submit" disabled={isDisabled}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
