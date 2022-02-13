const { authValidationChain } = require('./auth');
const { bookValidationChain } = require('./book');
const { bookmarkValidationChain } = require('./bookmark');

module.exports = {
  bookValidationChain,
  authValidationChain,
  bookmarkValidationChain,
};
