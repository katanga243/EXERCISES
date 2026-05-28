// The Message component receives an age prop. Using a ternary (conditional
// rendering), it shows the welcoming message when the age is greater than 18,
// otherwise it shows "You are very young!".
function Message({ age }) {
  return (
    <p>
      {age > 18 ? 'Welcome, you are old enough!' : 'You are very young!'}
    </p>
  );
}

export default Message;
