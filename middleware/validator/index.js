const { validationResult } = require('express-validator');

const { BadRequestError } = require('../../model/Http-Error');

// validation middleware
// if there are errors occurred in validation
// format the messages and throw a bad request error
exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsObj = {};

    errors.array().forEach(({ param, msg }) => {
      Object.assign(errorsObj, { [param]: msg });
    });

    const error = new BadRequestError(undefined, errorsObj);

    next(error);
  }

  next();
};
