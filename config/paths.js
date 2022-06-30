const path = require("path");

module.exports = {
  src: path.resolve(__dirname, "../src"), //source files
  assets: path.resolve(__dirname, "../src/assets"),
  builds: path.resolve(__dirname, "../dist"), // production
  static: path.resolve(__dirname, "../public"),
};
