import Message from './Message.jsx';

// The Hello component renders the "Hello, World!" message inside an h2 tag.
// It also renders the Message component.
function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
}

export default Hello;
