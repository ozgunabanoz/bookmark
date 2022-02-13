const { UnauthorizedError, User } = require('../../model');
const { verifyToken } = require('../../util');

// find the user record
exports.findUser = async (token) => {
  const decodedToken = verifyToken(token); // decode the jwt token

  // if the token cannot be verified throw an error
  if (!decodedToken) {
    throw new UnauthorizedError();
  }

  // extract the user id from token info and find the corresponding user record
  const { id } = decodedToken;
  const user = await User.findByPk(id);

  // if user does not exist throw an error
  if (!user) {
    throw new UnauthorizedError();
  }

  const userJson = user.toJSON();
  const data = { id: userJson.id, email: userJson.email };

  return data;
};
