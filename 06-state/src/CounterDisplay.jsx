// CounterDisplay receives the current counter value via the 'count' prop and
// displays it. It is a presentational child rendered inside Counter.
function CounterDisplay({ count }) {
  return <p>Count: {count}</p>;
}

export default CounterDisplay;
