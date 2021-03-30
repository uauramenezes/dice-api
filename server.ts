import * as http from 'http';
import getDiceNumber from './getDiceNumber';

const server = http.createServer((req, res) => {
  req.on('error', error => {
    console.log(error);
    res.statusCode = 400;
    res.end(JSON.stringify({error: "Bad Request"}));
  })

  let numberOfFaces = req.url;
  let diceNumber = getDiceNumber(numberOfFaces);

  res.setHeader('Content-Type', 'application/json');

  if (diceNumber > 0) {
    res.statusCode = 200;
    res.end(JSON.stringify({result: diceNumber}));
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({error: "Invalid url"}));
  }
});

export default server;