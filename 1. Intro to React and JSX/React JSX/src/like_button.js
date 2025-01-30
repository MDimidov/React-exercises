
// Display a "Like" <button>
const rootEl = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(rootEl);


const buttonElement = (
    <button className="btn">
      Like
    </button>
);

root.render(buttonElement);