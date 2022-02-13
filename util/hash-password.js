const bcrypt = require('bcryptjs');

// hash the password for storing it safely
exports.hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
};
