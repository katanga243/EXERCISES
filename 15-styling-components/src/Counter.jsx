import { useState } from 'react'
import CounterDisplay from './CounterDisplay.jsx'

function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue)

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={() => setCounter(counter + increment)}>Increment</button>
    </div>
  )
}

export default Counter
