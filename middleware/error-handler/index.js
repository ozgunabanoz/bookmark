const { HttpError, InternalError } = require('../../model');
const { ErrorResponse } = require('../../service');

// handling errors
exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  // if the error object doesnt belong to services error class
  // reformat it
  const error = err instanceof HttpError ? err : new InternalError();
  const errorResponse = new ErrorResponse(error);

  errorResponse.send(res);
};
