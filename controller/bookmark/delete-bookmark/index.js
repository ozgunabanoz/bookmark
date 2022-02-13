// Delete bookmark controller

const { SuccessResponse } = require('../../../service');
const {
  deleteBookmarkService,
} = require('../../../service/bookmark/delete-bookmark');

const { findAndDeleteBookmark } = deleteBookmarkService;

exports.deleteBookmark = async (req, res, next) => {
  try {
    const { params, user } = req;
    const { id } = params;
    const { id: userId } = user;

    await findAndDeleteBookmark(userId, id); // find the bookmark and if it exists then delete it

    const response = new SuccessResponse(); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
