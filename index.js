const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const path = require('path');

app.get('/', (req,res) => {
  res.send("Welcome to Typing-Wars");
});

const twport = 8080;
app.listen(twport, () => {
  console.log("TYPING-WARS running on port" + twport);
});
