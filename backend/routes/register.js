

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

module.exports = {
    handleRegister: handleRegister
}