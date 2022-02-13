const { User, BadRequestError } = require('../../../model');

// check if user exists
// if they do, throw an error
exports.checkUserExists = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    throw new BadRequestError('User already exists');
  }
};
