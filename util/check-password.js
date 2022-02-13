const bcrypt = require('bcryptjs');

// compare given password and hashed password from the user record
exports.checkPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
