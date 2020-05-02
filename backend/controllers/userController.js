/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      emergencyContact: {
        name: req.body.emergencyContact.name,
        phoneNo: req.body.emergencyContact.phoneNo
      },
      password: hash
    });

    user.save().then(() => {
      res.status(201).json({
        message: 'Registration successful!'
      });
    }).catch((error) => {
      res.status(500).json({
        error
      });
    });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(401).json({
        error: new Error('Username/Email not found!')
      });
    } else {
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res.status(401).json({
            error: new Error('Incorrect password!')
          });
        }

        const token = jwt.sign({ userId: user._id },
          'RANDOM_TOKEN_SECRET_STRING',
          { expiresIn: '1h' });

        return res.status(200).json({
          userId: user._id,
          token
        });
      }).catch((error) => {
        res.status(500).json({
          error
        });
      });
    }
  }).catch((error) => {
    res.status(500).json({
      error
    });
  });
};
