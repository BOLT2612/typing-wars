const app = require('./app');

const twport = 8080;

app.listen(twport, () => {
  console.log("TYPING-WARS running on port " + twport);
});
