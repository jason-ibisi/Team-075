const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes from routes folder
const register = require('./routes/register');
const signin = require('./routes/signin');
const profile = require('./routes/profile');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => { //This blocks the requests from hitting the endpoints.

  if (!req.body) { 
    res.status(404).send('Resource not found.');
  } else {
    next()
  }
});

// app.use((err, req, res) => { //This middleware blocks the request from reaching the endpoints
//   if (res.headersSent) {
//     return;
//   }

//   res.status(err.status || 500);
//   res.send(err.message || 'Internal Server Error');
// });

// Implement api

const database = {
  users: [
      {
          id:123,
          name: 'John',
          email: 'john@gmail.com',
          password: 'cookies',
          joined: new Date()
      },
      {
          id:124,
          name: 'Sally',
          email: 'sally@gmail.com',
          password: 'bananas',
          joined: new Date()
      }
  ]
}

app.get('/', (req, res) => {
  res.json(database.users);
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, database) });
app.post('/register', (req, res) => { register.handleRegister(req, res, database) });
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, database)})



app.listen(PORT, () => {
  console.log('Server started and running ...');
});


/*

/ --> res = this is working

POST /signin --> res = success/fail
POST /register --> res = user
GET /profile/:userid --> res = user



*/
