import { useState } from 'react'

function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue)

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + increment)}>Increment</button>
    </div>
  )
}

export default Counter
