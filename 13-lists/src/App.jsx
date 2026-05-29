/*
  Exercise 13 - Lists

  Rendering a list in React: map over an array and return an element per item,
  giving each a unique 'key' prop so React can track them. Here Colors maps over
  an array of color objects and renders a Color (an li) for each, using the
  color's id as the key.
*/

import Colors from './Colors.jsx';

const colors = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Green' },
  { id: 3, name: 'Blue' },
  { id: 4, name: 'Yellow' },
];

function App() {
  return (
    <div>
      <h1>Colors</h1>
      <Colors colors={colors} />
    </div>
  );
}

export default App;
