

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
      handleProfile: handleProfile
  }