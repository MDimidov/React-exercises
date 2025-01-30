var rootEl = document.querySelector("#root");
var root = ReactDOM.createRoot(rootEl);

// // console.dir(rootEl);
// var headingEl = React.createElement("h1", null, "Hello React");
// var secondHeadingEl = React.createElement("h2", null, "Hello World");
// var headerEl = React.createElement("header", null, headingEl, secondHeadingEl);
// // console.log(JSON.parse(JSON.stringify(headerEl)));
// root.render(headerEl);

// Use JSX
var headerElement = React.createElement(
    "header",
    { className: "header-container" },
    React.createElement(
        "h1",
        { className: "header" },
        "Hello React"
    ),
    React.createElement(
        "h2",
        null,
        "Hello World"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam quos ea in, laborum architecto consectetur ullam tempora. Modi, cupiditate!"
    )
);

root.render(headerElement);