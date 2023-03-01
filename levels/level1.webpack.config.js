const path = require("path");

module.exports = {
  entry: "./src/level1/index.js",
  output: {
    filename: "level1.js",
    path: path.join(__dirname, "../public"),
  },
};
