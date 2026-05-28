import Hello from './Hello.jsx';

// The App component renders the Hello component within a div tag.
function App() {
  return (
    <div>
      <Hello />
      {/*
        Q: Can you use the Hello component more than once in the App component?
        A: Yes. Components are reusable blueprints, so <Hello /> can be rendered
           multiple times. Each instance renders its own independent output
           (its own h2 and Message). For example we could render <Hello /> twice
           and we would see the heading and paragraph repeated.

        Q: Can you render the Message component directly within the App component?
        A: Yes. As long as Message is imported, it can be rendered anywhere,
           including directly inside App. Components are not tied to a single
           parent, so <Message /> works both inside Hello and inside App.
      */}
    </div>
  );
}

export default App;
