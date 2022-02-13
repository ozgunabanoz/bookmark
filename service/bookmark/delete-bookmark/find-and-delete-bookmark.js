const { Bookmark, BadRequestError } = require('../../../model');

// find the bookmark by its id and userid
// if there are not any record found
// throw an error
exports.findAndDeleteBookmark = async (userId, bookId) => {
  const bookmark = await Bookmark.findOne({
    where: { id: bookId, UserId: userId },
  });

  if (!bookmark) {
    throw new BadRequestError('Bookmark does not exist');
  }

  await bookmark.destroy();
};
