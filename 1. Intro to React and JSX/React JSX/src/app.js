const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

// // console.dir(rootEl);
// var headingEl = React.createElement("h1", null, "Hello React");
// var secondHeadingEl = React.createElement("h2", null, "Hello World");
// var headerEl = React.createElement("header", null, headingEl, secondHeadingEl);
// // console.log(JSON.parse(JSON.stringify(headerEl)));
// root.render(headerEl);

// Use JSX
const headerElement = (
    <header className="header-container">
        <h1 className="header">Hello React</h1>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam quos ea in, laborum architecto consectetur ullam tempora. Modi, cupiditate!</p>
    </header>
);

root.render(headerElement);