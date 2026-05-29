import Color from './Color.jsx';

// Colors takes an array of color objects (each with name and id) as a prop and
// renders an unordered list of Color components. Each item gets a unique 'key'
// (the color id) so React can track list items efficiently.
function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export default Colors;
