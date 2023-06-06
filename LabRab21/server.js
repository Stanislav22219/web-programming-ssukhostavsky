const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const number = req.body.number;
  const square = number * number;
  res.send(square.toString());
});

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});