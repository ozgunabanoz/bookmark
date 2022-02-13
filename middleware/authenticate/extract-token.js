const { UnauthorizedError } = require('../../model');

// extracting the jwt token from the authorization header
exports.extractToken = (req) => {
  const {
    headers: { authorization: authHeader },
  } = req;
  const token = authHeader ? authHeader.split(' ')[1] : null;

  // if token does not exist throw an error
  if (!token) {
    throw new UnauthorizedError();
  }

  return token;
};
