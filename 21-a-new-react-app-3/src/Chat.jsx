import { useState, useRef, useEffect } from 'react'
import Message from './Message.jsx'

function Chat({ initialMessages = [] }) {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const listRef = useRef(null)

  // Auto-scroll to the bottom whenever messages change.
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { text: trimmed, sent: true }])
    setInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      sendMessage()
    }
  }

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    padding: '0.5rem',
  }

  return (
    <div>
      <div ref={listRef} style={listStyle}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sent={message.sent} />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Chat
