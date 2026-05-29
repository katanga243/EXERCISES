import Chat from './Chat.jsx'

/*
  A new React App - 3 exercise

  Extends the chat app so the user can send new messages. The Chat component
  keeps the messages in state and renders each one as a Message speech bubble
  (sent on the right, received on the left).

  Sending behaviour:
  - Clicking Send or pressing Enter adds the new message to the array.
  - Empty or whitespace-only input is ignored (input.trim()).
  - The input is cleared after sending.
  - The chat window auto-scrolls to the bottom (useRef + useEffect on messages).
*/

const initialMessages = [
  { text: 'Hi there!', sent: false },
  { text: 'Hello! How are you?', sent: true },
  { text: 'Doing great, thanks.', sent: false },
]

function App() {
  return (
    <div>
      <h1>Chat</h1>
      <Chat initialMessages={initialMessages} />
    </div>
  )
}

export default App
