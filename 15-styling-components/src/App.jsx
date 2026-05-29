import Welcome from './Welcome.jsx'
import Counter from './Counter.jsx'
import Login from './Login.jsx'

/*
  Styling Components exercise

  - index.css is created and imported in index.jsx.
  - The Welcome component uses a .welcome class (background color + border) defined in index.css.
  - CounterDisplay uses an inline style object (fontSize + color).
  - The Login button background is red when the password length is shorter
    than 8 characters, and green otherwise (inline style based on a prop/state).

  Inline styles vs CSS classes: inline styles take a JS object with camelCased
  properties and are great for dynamic, prop/state-driven values; CSS classes
  are better for static, reusable styling.
*/

function App() {
  return (
    <div>
      <Welcome name="Develhope" />
      <Counter initialValue={0} increment={1} />
      <Login onLogin={(data) => console.log('login', data)} />
    </div>
  )
}

export default App
