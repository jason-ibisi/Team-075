const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import routes from routes folder

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

app.post('/signin', (req, res) => {
  
  const { email, password } = database.users[0]
  
  if (req.body.email === email && req.body.password === password) {
          res.json('success');
      }else {
          res.status(400).json('error logging in');
      }
})

app.post('/register', (req, res) => {

  const { name, email, password } = req.body;

  database.users.push({
      id: database.users[database.users.length - 1].id + 1,
      name,
      email,
      password,
      joined: new Date()
  })
  res.json(database.users[database.users.length - 1]);
})

app.listen(PORT, () => {
  console.log('Server started and running ...');
});
