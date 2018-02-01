//typing_wars_controller.js
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../build');

module.exports = {
  simple(req, res) {
    res.send("Welcome to Typing-Wars");
  },

  landing(req, res) {
    res.sendFile(`${BUILD_DIR}/index.html`);
  }
}