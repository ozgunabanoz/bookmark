const { body } = require('express-validator');

// validation chain for register operation
exports.signUpValidationChain = [
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
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];
