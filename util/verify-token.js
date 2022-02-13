const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

// verifying jwt token extracted from the authorization header
exports.verifyToken = (token) => {
  const decodedToken = jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      return decoded;
    }

    return null;
  });

  return decodedToken;
};
