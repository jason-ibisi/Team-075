const joi = require('@hapi/joi');

const userSchema = joi.object({
  name: joi.string().pattern(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(15).required(),
  phoneNo: joi.string().pattern(/^([0-9])\d{10}$/).required(),
  emergencyContact: joi.object({
    name: joi.string().pattern(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/).required(),
    phoneNo: joi.string().pattern(/^([0-9])\d{10}$/).disallow(joi.ref('/phoneNo')).required()
  })
}).options({ stripUnknown: true });

const reportSchema = joi.object({
  reporter: joi.object().keys({
    phoneNo: joi.string().pattern(/^([0-9])\d{10}$/).required(),
    userId: joi.string()
  }),
  location: joi.object({
    latitude: joi.string().required(),
    longitude: joi.string().required()
  })
}).options({ stripUnknown: true });

const userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(422).json({
      message: 'Please review the required fields!',
      error
    });
  }

  return next();
};

const reportValidation = (req, res, next) => {
  const { error } = reportSchema.validate(req.body);

  if (error) {
    return res.status(422).json({
      message: 'Invalid data',
      error
    });
  }

  return next();
};

module.exports = {
  userValidation,
  reportValidation
};
