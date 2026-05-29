// A single chat message rendered as a speech bubble. Sent messages align to
// the right, received messages to the left.
function Message({ text, sent }) {
  const style = {
    maxWidth: '60%',
    margin: '0.25rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '12px',
    alignSelf: sent ? 'flex-end' : 'flex-start',
    backgroundColor: sent ? '#0b93f6' : '#e5e5ea',
    color: sent ? 'white' : 'black',
  }

  return <div style={style}>{text}</div>
}

export default Message
