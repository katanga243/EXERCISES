/*
  Exercise 08 - Handling Events

  Demonstrates reading data from the event object. The MouseClicker component has
  a button (name="one") whose handler logs event.target.name, and a button
  (name="two") containing an image whose handler logs the image src. Because DOM
  events bubble, event.stopPropagation() is used on the image so the button's
  handler does not also fire when the image is clicked.
*/

import MouseClicker from './MouseClicker.jsx';

function App() {
  return (
    <div>
      <MouseClicker />
    </div>
  );
}

export default App;
