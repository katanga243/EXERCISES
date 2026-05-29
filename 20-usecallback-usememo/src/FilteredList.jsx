import { useMemo } from 'react'

// Renders only items with age > 18. The filtered list is memoized with useMemo
// so the filtering only re-runs when the list prop changes.
function FilteredList({ list }) {
  const filtered = useMemo(() => {
    return list.filter((item) => item.age > 18)
  }, [list])

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>
          {item.name} ({item.age})
        </li>
      ))}
    </ul>
  )
}

export default FilteredList
