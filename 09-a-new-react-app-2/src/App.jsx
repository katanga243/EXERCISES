/*
  Exercise 09 - A new React App 2

  A simple chat interface. The messages live in state as an array of objects,
  each with an id, the text, and a 'sent' flag. The Chat component maps over them
  and renders a Message for each; Message shows a speech bubble aligned right when
  sent and left when received. This ties together components, props, state and
  list rendering with keys.
*/

import { useState } from 'react';
import Chat from './Chat.jsx';

function App() {
  const [messages] = useState([
    { id: 1, text: 'Hey, how are you?', sent: false },
    { id: 2, text: 'I am good, thanks! You?', sent: true },
    { id: 3, text: 'Doing great. Working on React.', sent: false },
    { id: 4, text: 'Nice, me too!', sent: true },
  ]);

  return (
    <div>
      <h1>Chat</h1>
      <Chat messages={messages} />
    </div>
  );
}

export default App;
