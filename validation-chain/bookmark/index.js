const { listBookmarkValidationChain } = require('./list');
const { postBookmarkValidationChain } = require('./post');

exports.bookmarkValidationChain = {
  postBookmarkValidationChain,
  listBookmarkValidationChain,
};
