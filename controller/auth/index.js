const { login } = require('./login');
const { signUp } = require('./signup');

exports.authControllers = { signUp, login };
