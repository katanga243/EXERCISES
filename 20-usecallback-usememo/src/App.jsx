import useCounter from './useCounter.js'
import FilteredList from './FilteredList.jsx'

/*
  useCallback and useMemo exercise

  useCounter memoizes its increment/decrement/reset handlers with useCallback so
  their function identity stays stable between renders (useful when passing them
  to memoized children).

  FilteredList uses useMemo to compute the filtered list (age > 18) only when the
  list prop changes, instead of recomputing on every render.

  useCallback memoizes a function; useMemo memoizes a computed value.
*/

const people = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 16 },
  { id: 3, name: 'Carol', age: 34 },
  { id: 4, name: 'Dan', age: 12 },
  { id: 5, name: 'Eve', age: 19 },
]

function App() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div>
      <h1>useCallback and useMemo</h1>
      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </section>
      <section>
        <h2>Adults (age &gt; 18)</h2>
        <FilteredList list={people} />
      </section>
    </div>
  )
}

export default App
