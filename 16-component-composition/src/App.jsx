import Container from './Container.jsx'

/*
  Component Composition exercise

  The Container component uses the children prop to render whatever is nested
  inside it within a styled div (white background, red border). A title prop is
  displayed before the children, and clicking the title toggles a collapsed
  state (useState) that hides or shows the children.

  Composition (passing children) lets a component be reusable as a generic
  wrapper without knowing in advance what it will contain.
*/

function App() {
  return (
    <div>
      <h1>Component Composition</h1>
      <Container title="About">
        <p>Click the title above to collapse or expand this section.</p>
      </Container>
      <Container title="Details">
        <ul>
          <li>First item</li>
          <li>Second item</li>
        </ul>
      </Container>
    </div>
  )
}

export default App
