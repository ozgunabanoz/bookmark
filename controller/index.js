const { authControllers } = require('./auth');
const { bookControllers } = require('./book');
const { bookmarkControllers } = require('./bookmark');

module.exports = { bookControllers, authControllers, bookmarkControllers };
