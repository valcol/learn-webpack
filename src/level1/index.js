var ReactDOM = require("react-dom/client");
var Hello = require("./Hello.jsx");
var React = require("react");

var container = document.getElementById("level1");
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello));
