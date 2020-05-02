

const handleRegister = (req, res, database) => {

    const { name, email, password } = req.body;
  
    database.users.push({
        id: database.users[database.users.length - 1].id + 1,
        name,
        email,
        password,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1]);
}



const handleSignin = (req, res, database) => {
  
    const { email, password } = database.users[0]
    
    if (req.body.email === email && req.body.password === password) {
            res.json('success');
    } else {
            res.status(400).json('error logging in');
    }
}


const handleProfile = (req, res, database) => {
    const { id } = req.params;
    let found = true;
    database.users.forEach(user => {
      if (user.id === parseInt(id)) {
        found = true;
        return res.json(user);
      }
    })
    if (!found) {
      res.status(404).json('no such user!');
    }
}




module.exports = {
    handleRegister: handleRegister,
    handleSignin: handleSignin,
    handleProfile: handleProfile 
};