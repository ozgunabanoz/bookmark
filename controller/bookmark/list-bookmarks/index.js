// list bookmarks controller

const { SuccessResponse } = require('../../../service');
const { listBookmarkService } = require('../../../service/bookmark');

const { getBookmarks } = listBookmarkService;

exports.listBookmarks = async (req, res, next) => {
  try {
    const { user, query } = req;
    const { id } = user;
    const { limit, page } = query;
    const bookmarks = await getBookmarks(id, limit, page); // retrieve the user's bookmarks
    const response = new SuccessResponse(undefined, bookmarks); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
