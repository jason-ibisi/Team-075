const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import routes from routes folder

const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res) => {
  res.status(404).send('Resource not found.');
});

app.use((err, req, res) => {
  if (res.headersSent) {
    return;
  }

  res.status(err.status || 500);
  res.send(err.message || 'Internal Server Error');
});

// Implement api

app.listen(PORT, () => {
  console.log('Server started and running ...');
});
