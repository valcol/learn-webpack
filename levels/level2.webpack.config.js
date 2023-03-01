const path = require("path");

module.exports = {
  entry: "./src/level2/index.js",
  output: {
    filename: "level2.js",
    path: path.join(__dirname, "../public"),
  },
};
