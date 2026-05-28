import Welcome from './Welcome.jsx';

// The App component renders the Welcome component, passing it a name prop and
// an age prop. The Welcome component forwards the age prop to the Age component.
function App() {
  return (
    <div>
      <Welcome name="John" age={30} />
    </div>
  );
}

export default App;
