const root = ReactDOM.createRoot(document.getElementById("root"));
const h1Ele = React.createElement(
    "h1", { id: "headings", xyz: "abc" },
    "Hello world from React"
);
root.render(h1Ele);