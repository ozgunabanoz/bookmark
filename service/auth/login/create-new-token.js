const { generateToken } = require('../../../util');

// generate new jwt token for authorization
exports.createNewToken = (id, email) => {
  const token = generateToken(id, email);

  return token;
};
