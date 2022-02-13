const { UnauthorizedError } = require('../../../model');
const { checkPassword } = require('../../../util');

// check if given password is correct, if not throw an error
exports.comparePassword = async (password, hashedPassword) => {
  const isPasswordCorrect = await checkPassword(password, hashedPassword);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid credentials');
  }
};
