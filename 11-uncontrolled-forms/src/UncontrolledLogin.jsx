import { useRef } from 'react';

// UncontrolledLogin is an UNCONTROLLED form: the inputs keep their own state in
// the DOM and we read their values on submit, rather than tracking them in React
// state. We show three ways to read the values:
//   1. via useRef references to each input (onLogin)
//   2. via the DOM API by reading event.target.elements on submit
//   3. via the FormData API (loginWithFormData)
function UncontrolledLogin() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const onLogin = () => {
    console.log('From refs:', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      remember: rememberRef.current.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Read values straight from the DOM via event.target.elements
    const form = event.target;
    console.log('From DOM API:', {
      username: form.elements.username.value,
      password: form.elements.password.value,
      remember: form.elements.remember.checked,
    });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    console.log('From FormData API:', Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" ref={usernameRef} placeholder="Username" />
      <input type="password" name="password" ref={passwordRef} placeholder="Password" />
      <label>
        <input type="checkbox" name="remember" ref={rememberRef} />
        Remember me
      </label>
      <button type="submit" onClick={onLogin}>Login</button>
      <button type="button" onClick={loginWithFormData}>Login with FormData</button>
    </form>
  );
}

export default UncontrolledLogin;
