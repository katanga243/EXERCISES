/*
  Exercise 14 - Lists and State

  Combines list rendering with state. The todos array lives in state, so the UI
  updates reactively as items are added or removed. Updates always create a new
  array (no direct mutation): add appends and clears the input, remove filters
  out an item, and reset empties the list.
*/

import TodoList from './TodoList.jsx';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
