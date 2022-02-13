const { deleteBookmark } = require('./delete-bookmark');
const { listBookmarks } = require('./list-bookmarks');
const { postBookmark } = require('./post-bookmark');

exports.bookmarkControllers = { postBookmark, listBookmarks, deleteBookmark };
