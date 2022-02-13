const { checkBookmarkExists } = require('./check-bookmark-exists');
const { createBookmark } = require('./create-bookmark');
const { findBook } = require('./find-book');

exports.postBookmarkService = { findBook, checkBookmarkExists, createBookmark };
