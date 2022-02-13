const { NotFoundError } = require('../../model');

// if a request comes to an unknown route, throw a not found error
exports.notFoundHandler = (req, res, next) => {
  const error = new NotFoundError();

  next(error);
};
