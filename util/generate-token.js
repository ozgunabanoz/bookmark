const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

// generate jwt token with user information
exports.generateToken = (id, email) => {
  const data = { id, email };
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

  return token;
};
