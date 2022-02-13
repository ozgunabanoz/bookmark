const { oneOf, query } = require('express-validator');

// validation chain for querying books
exports.getBooksValidationChain = [
  oneOf(
    [
      query('title').exists().trim().toLowerCase(),
      query('author').exists().trim().toLowerCase(),
      query('keyword').exists().trim().toLowerCase(),
    ],
    'At least one title/author/keyword parameter is required',
  ),
  query('limit')
    .optional()
    .trim()
    .isInt({ min: 10, max: 40 })
    .withMessage('Limit must be a number between 10 and 40'),
  query('startIndex')
    .optional()
    .trim()
    .isInt({ min: 0 })
    .withMessage('Starting index must be zero or a positive number'),
];
