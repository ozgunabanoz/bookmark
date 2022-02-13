const { body } = require('express-validator');

// validation chain for login operation
exports.loginValidationChain = [
  body('email')
    .exists({ checkFalsy: true, checkNull: true })
    .bail()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Email is invalid'),
  body('password')
    .exists({ checkFalsy: true, checkNull: true })
    .bail()
    .withMessage('Password is required')
    .trim(),
];
