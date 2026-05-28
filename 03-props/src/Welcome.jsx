import Age from './Age.jsx';

// The Welcome component receives a name prop (with a default value) and an
// age prop. It renders the "Welcome, {name}!" message inside a p tag, with the
// name wrapped in a strong tag, and delegates rendering the age to the Age
// component, passing along the age prop it received.
function Welcome({ name = 'Guest', age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
}

export default Welcome;
