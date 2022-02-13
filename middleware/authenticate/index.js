const { extractToken } = require('./extract-token');
const { findUser } = require('./find-user');

// authentication middleware
exports.authenticate = async (req, res, next) => {
  try {
    const token = extractToken(req); // extracting user info from the token
    const user = await findUser(token); // find the user record

    Object.assign(req, { user }); // add the user record into express request object
    next();
  } catch (error) {
    next(error);
  }
};
