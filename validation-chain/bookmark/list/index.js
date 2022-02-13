const { query } = require('express-validator');

// validation chain for listing bookmarks
exports.listBookmarkValidationChain = [
  query('limit')
    .optional()
    .trim()
    .isInt({ min: 10, max: 50 })
    .withMessage('Limit must be a number between 10 and 50'),
  query('page')
    .optional()
    .trim()
    .isInt({ min: 0 })
    .withMessage('Starting page must be zero or a positive number'),
];
