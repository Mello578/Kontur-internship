const express = require('express');
const app = express();
const theFinishedArray = require('./shirtOfCards/selectShirt');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/', (req, res)=>{
res.json(theFinishedArray())
});

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
