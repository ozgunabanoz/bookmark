const { Bookmark } = require('../../../model');

// get the users bookmarks
exports.getBookmarks = async (userId, limit = 10, page = 0) => {
  const offset = limit * page; // calculate the offset point
  const pageLimit = parseInt(limit); // must convert to int because sequelize doesnt accept a string value
  const bookmarks = await Bookmark.findAll({
    where: { UserId: userId },
    limit: pageLimit,
    offset,
  });
  const bookmarksJson = [];

  bookmarks.forEach((bookmark) => {
    bookmarksJson.push(bookmark.toJSON());
  });

  return bookmarksJson;
};
