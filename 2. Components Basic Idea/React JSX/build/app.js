var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
// Use JSX Syntax 

function HeaderElement(params) {
    return React.createElement(
        "h1",
        { className: "heading" },
        "Hello from ",
        params.title,
        "!"
    );
}

var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "header-container" },
        React.createElement(HeaderElement, { title: "React" }),
        React.createElement(HeaderElement, { title: "Second" }),
        React.createElement(
            "h2",
            null,
            "Slogan here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur architecto dolorum sit quidem tenetur doloremque aspernatur reprehenderit ratione sed!"
        )
    ),
    React.createElement(
        "button",
        null,
        "Click"
    )
);

root.render(headerElement);