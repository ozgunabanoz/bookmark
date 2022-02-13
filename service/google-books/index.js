const { HttpRequest } = require('../http-request');
const { InternalError, HttpError } = require('../../model');

// Service for arranging the communication with Google Books API
class GoogleBookService {
  constructor() {
    this.url = 'https://www.googleapis.com/books/v1/volumes';
  }

  // for searching books
  async getBooks({
    title = '',
    author = '',
    keyword = '',
    limit = 10,
    startIndex = 0,
  }) {
    try {
      // build a query string
      const queryString = this.configBuilder(keyword, title, author);
      const { url } = this;
      const config = {
        params: { q: queryString, maxResults: limit, startIndex },
      };
      // create an http service instance
      const httpService = new HttpRequest();
      const {
        data: { items },
      } = await httpService.get(url, config); // make a get request to google books api

      return { books: items }; // return the records
    } catch (error) {
      this.errorHandler();
    }
  }

  // getting books with the given id
  async getBook(id) {
    try {
      // build the request url
      const url = `${this.url}/${id}`;
      const httpService = new HttpRequest();
      const {
        data: { volumeInfo },
      } = await httpService.get(url); // make a request to google books api
      const { title, authors } = volumeInfo; // extract necessary information
      const author = authors[0];
      const book = { googleId: id, title, author };

      return { book }; // return the record
    } catch (error) {
      this.errorHandler();
    }
  }

  // error handling
  errorHandler() {
    const errorMsg = 'Google Books API error';
    const internalServerError = new InternalError(errorMsg);

    throw internalServerError;
  }

  // building the google books api query string according to arguments
  configBuilder(keyword, title, author) {
    const messages = [];

    if (keyword) {
      messages.push(keyword);
    }

    if (title) {
      messages.push(`intitle:${title}`);
    }

    if (author) {
      messages.push(`inauthor:${author}`);
    }

    const queryString = messages.join('+');

    return queryString;
  }
}

module.exports = { GoogleBookService };
