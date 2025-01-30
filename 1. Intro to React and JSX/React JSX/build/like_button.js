
// Display a "Like" <button>
var rootEl = document.querySelector("#like_button_container");
var root = ReactDOM.createRoot(rootEl);

var buttonElement = React.createElement(
  "button",
  { className: "btn" },
  "Like"
);

root.render(buttonElement);