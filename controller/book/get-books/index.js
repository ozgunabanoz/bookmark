// Books controller

const { SuccessResponse, GoogleBookService } = require('../../../service');

exports.getBooks = async (req, res, next) => {
  try {
    const { query } = req;
    const gBookService = new GoogleBookService();
    const { books } = await gBookService.getBooks(query); // get the books from google books api
    const response = new SuccessResponse(undefined, books); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
