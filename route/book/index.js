// book routes

const express = require('express');

const { bookControllers } = require('../../controller');
const { bookValidationChain } = require('../../validation-chain');
const { validator } = require('../../middleware');

const router = express.Router();

const { getBooks } = bookControllers;
const { getBooksValidationChain } = bookValidationChain;

router.get('/', getBooksValidationChain, validator, getBooks);

module.exports = router;
