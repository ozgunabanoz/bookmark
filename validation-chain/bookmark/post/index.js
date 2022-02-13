const { body } = require('express-validator');

// validation chain for adding bookmarks
exports.postBookmarkValidationChain = [
  body('googleId')
    .exists({ checkFalsy: true, checkNull: true })
    .bail()
    .withMessage('Google id is required')
    .trim(),
];
