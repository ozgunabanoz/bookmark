// add a bookmark controller

const { postBookmarkService, SuccessResponse } = require('../../../service');

const { findBook, checkBookmarkExists, createBookmark } = postBookmarkService;

exports.postBookmark = async (req, res, next) => {
  try {
    const { body, user } = req;
    const { googleId } = body;
    const googleBook = await findBook(googleId); // check if the book exists in google books service
    const { id: userId } = user;

    await checkBookmarkExists(userId, googleId); // check a bookmark for the book already exists

    const bookmark = await createBookmark(userId, googleBook); // if not, create a new bookmark
    const response = new SuccessResponse(undefined, bookmark); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
