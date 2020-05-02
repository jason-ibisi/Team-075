

const handleSignin = (req, res, database) => {
  
    const { email, password } = database.users[0]
    
    if (req.body.email === email && req.body.password === password) {
            res.json('success');
    } else {
            res.status(400).json('error logging in');
        }
  }

  module.exports = {
      handleSignin: handleSignin
  }