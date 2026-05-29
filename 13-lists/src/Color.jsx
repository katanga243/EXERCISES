// Color receives a 'color' object prop with two properties: id and name.
// It returns an li tag that displays the color's name.
function Color({ color }) {
  return <li>{color.name}</li>;
}

export default Color;
