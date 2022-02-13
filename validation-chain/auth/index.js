const { loginValidationChain } = require('./login');
const { signUpValidationChain } = require('./signup');

exports.authValidationChain = { signUpValidationChain, loginValidationChain };
