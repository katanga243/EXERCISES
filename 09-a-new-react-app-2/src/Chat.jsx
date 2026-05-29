import Message from './Message.jsx';

// Chat receives an array of message objects (each: { id, text, sent }) and
// renders a Message for each one, using the id as a unique key.
function Chat({ messages }) {
  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      {messages.map((message) => (
        <Message key={message.id} text={message.text} sent={message.sent} />
      ))}
    </div>
  );
}

export default Chat;
