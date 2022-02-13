const { GoogleBookService } = require('../../google-books');

// check if the id corresponds to a book in google books api
exports.findBook = async (id) => {
  const gBookService = new GoogleBookService();
  const { book } = await gBookService.getBook(id);

  return book;
};
