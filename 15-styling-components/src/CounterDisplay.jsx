function CounterDisplay({ count }) {
  const style = {
    fontSize: '2rem',
    color: 'darkgreen',
  }

  return <p style={style}>Count: {count}</p>
}

export default CounterDisplay
