const express = require('express');
const app = express();
const mixedAndDuplicatedArray= require('./shirtOfCards/selectShirt');
const PORT = 3000;

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/', (req, res) => {
  res.json(mixedAndDuplicatedArray())
});

app.listen(PORT, () => console.log(`Express app listening on localhost:${PORT}`));
