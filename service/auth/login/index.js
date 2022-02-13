const { comparePassword } = require('./compare-password');
const { createNewToken } = require('./create-new-token');
const { findUser } = require('./find-user');

exports.loginService = { findUser, comparePassword, createNewToken };
