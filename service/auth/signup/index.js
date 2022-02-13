const { checkUserExists } = require('./check-user-exists');
const { createNewUser } = require('./create-new-user');

exports.signUpService = { checkUserExists, createNewUser };
