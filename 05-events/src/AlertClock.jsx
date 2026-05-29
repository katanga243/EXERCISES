// AlertClock renders a button. The click handler is NOT implemented here —
// it is RECEIVED AS A PROP (onShowTime) from the parent (App) and passed by
// reference to the button's onClick. React uses camelCase event names.
function AlertClock({ onShowTime }) {
  return (
    <div>
      <h1>Alert Clock</h1>
      <button onClick={onShowTime}>Show current time</button>
    </div>
  );
}

export default AlertClock;
