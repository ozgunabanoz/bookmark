const { User, BadRequestError } = require('../../../model');

exports.findUser = async (email) => {
  // find the user by email
  // if it doesnt exist, throw an error
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new BadRequestError('User does not exist');
  }

  const userJson = user.toJSON();

  return userJson;
};
