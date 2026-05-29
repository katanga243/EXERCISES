// MouseClicker demonstrates reading data from the event object in event handlers.
//
// - The first button has name="one"; its handler reads event.target.name.
// - The second button has name="two" and contains an image; clicking the image
//   triggers a handler that reads the image's src (event.target.src).
//
// Q: How can you prevent the button's name from being printed to the console
//    when the image inside it is clicked?
// A: HTML events bubble up to parent elements, so clicking the image would also
//    trigger the button handler. Call event.stopPropagation() in the image's
//    handler to stop the event from bubbling up to the button.
function MouseClicker() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    console.log(event.target.src);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Button one
      </button>

      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://via.placeholder.com/40"
          alt="placeholder"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
}

export default MouseClicker;
