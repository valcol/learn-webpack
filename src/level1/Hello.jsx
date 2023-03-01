var React = require("react");

module.exports = class Hello extends React.Component {
  render() {
    return React.createElement("h1", null, "Level 1");
  }
};
