// bookmark routes

const express = require('express');

const { bookmarkControllers } = require('../../controller');
const { authenticate, validator } = require('../../middleware');
const { bookmarkValidationChain } = require('../../validation-chain');

const router = express.Router();

const { postBookmark, listBookmarks, deleteBookmark } = bookmarkControllers;
const { postBookmarkValidationChain, listBookmarkValidationChain } =
  bookmarkValidationChain;

router.post(
  '/',
  authenticate,
  postBookmarkValidationChain,
  validator,
  postBookmark,
);

router.get(
  '/',
  authenticate,
  listBookmarkValidationChain,
  validator,
  listBookmarks,
);

router.delete('/:id', authenticate, deleteBookmark);

module.exports = router;
