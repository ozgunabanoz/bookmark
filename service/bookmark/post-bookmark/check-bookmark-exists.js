const { Bookmark, BadRequestError } = require('../../../model');

exports.checkBookmarkExists = async (userId, googleId) => {
  // check if the bookmark exists for the corresponding user and googleid
  const bookmark = await Bookmark.findOne({
    where: { UserId: userId, googleId },
  });

  // if it exists, throw an error
  if (bookmark) {
    throw new BadRequestError('Bookmark already exists');
  }
};
