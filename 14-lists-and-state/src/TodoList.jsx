import { useState } from 'react';

// TodoList keeps the list of todos (an array of strings) and the current input
// text in state. We never mutate state directly: adding/removing creates a NEW
// array. Adding a todo appends the input value and clears the input. Each li has
// a remove button, and a reset button empties the whole list.
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos((prev) => [...prev, text]);
    setText('');
  };

  const removeTodo = (indexToRemove) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={resetTodos}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
