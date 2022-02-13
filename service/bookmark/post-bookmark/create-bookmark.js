const { Bookmark } = require('../../../model');

// creating a new bookmark record
exports.createBookmark = async (userId, book) => {
  const data = { ...book, UserId: userId };
  const bookmark = new Bookmark(data);

  await bookmark.save(); // create a new bookmark instance and save it

  const bookmarkJson = bookmark.toJSON();

  return bookmarkJson;
};
