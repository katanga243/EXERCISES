import { useState, useCallback } from 'react'

// Counter hook whose handlers are memoized with useCallback so their identity
// stays stable across re-renders.
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount((c) => c + 1), [])
  const decrement = useCallback(() => setCount((c) => c - 1), [])
  const reset = useCallback(() => setCount(initialValue), [initialValue])

  return { count, increment, decrement, reset }
}

export default useCounter
