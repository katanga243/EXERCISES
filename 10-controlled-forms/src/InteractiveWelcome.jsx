import { useState } from 'react';
import Welcome from './Welcome.jsx';

// InteractiveWelcome renders a CONTROLLED input: its value is stored in state
// (name) and kept in sync through onChange. The current value is passed to the
// Welcome component's name prop, so the greeting updates live as you type.
function InteractiveWelcome() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
}

export default InteractiveWelcome;
