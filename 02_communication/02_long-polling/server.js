const express = require('express');

const app = express();
// inital data
let data = 'Initial Data';

const waitingClients = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getData', (req, res) => {
  if (data !== req.query.lastData ) {
      res.json({ data });
  } else {
    waitingClients.push(res);
  }
});

app.get('/updateData', (req, res) => {
    data = req.query.data;
    console.log(data);
    while(waitingClients.length > 0) {
        const clients = waitingClients.pop();
        clients.json({ data });
    }
    res.send({ sucess: "Data updated Sucessfully"});
});

const port = process.env.PORT || 5011;

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});