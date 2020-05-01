const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

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

app.listen(3000, () => {
    console.log('app is running on port 3000');
});


/*

/ --> res = this is working

POST /signin --> res = success/fail
POST /register --> res = user
GET /profile/:userid --> res = user



*/
