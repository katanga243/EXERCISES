import Age from './Age.jsx';
import Message from './Message.jsx';

// The Welcome component receives a name prop and an age prop. It renders the
// "Welcome, {name}!" message and 5 Age components, each rendered with a
// different conditional-rendering condition. It also renders a Message
// component, passing it the age prop.
function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>

      {/* 1. Render only if age is greater than 18. */}
      {age > 18 && <Age age={age} />}

      {/* 2. Render only if the age prop is present (not undefined/null). */}
      {age != null && <Age age={age} />}

      {/* 3. Render only if age is greater than 18 AND less than 65. */}
      {age > 18 && age < 65 && <Age age={age} />}

      {/* 4. Render only if age is greater than 18 AND name equals "John". */}
      {age > 18 && name === 'John' && <Age age={age} />}

      {/* 5. Render using a ternary as an additional condition example. */}
      {age >= 18 ? <Age age={age} /> : null}

      <Message age={age} />
    </div>
  );
}

export default Welcome;
