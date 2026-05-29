// Message renders a single chat message as a speech bubble. The 'sent' prop
// decides alignment: sent messages align to the right, received to the left.
function Message({ text, sent }) {
  const rowStyle = {
    display: 'flex',
    justifyContent: sent ? 'flex-end' : 'flex-start',
    margin: '4px 0',
  };

  const bubbleStyle = {
    maxWidth: '70%',
    padding: '8px 12px',
    borderRadius: '16px',
    backgroundColor: sent ? '#0b93f6' : '#e5e5ea',
    color: sent ? '#ffffff' : '#000000',
  };

  return (
    <div style={rowStyle}>
      <span style={bubbleStyle}>{text}</span>
    </div>
  );
}

export default Message;
