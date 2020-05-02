const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// import routes from routes folder
const userRoutes = require('./routes/user');

const app = express();

const PORT = 3001;

mongoose
  .connect('mongodb+srv://ersAdmin:Admin123@@ers-m0o8p.mongodb.net/ers?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  }).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.log(error);
  });

app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use('/api/auth', userRoutes);

app.use((req, res) => {
  res.status(404).send('Resource not found.');
});

app.use((req, res, next) => {
  if (!req.body) {
    res.status(404).send('Resource not found.');
  } else {
    next();
  }
});

app.use((err, req, res) => {
  if (res.headersSent) {
    return;
  }

  res.status(err.status || 500);
  res.send(err.message || 'Internal Server Error');
});


app.listen(PORT, () => {
  console.log('Server started and running ...');
});
