// login and signup routes

const express = require('express');

const { authValidationChain } = require('../../validation-chain');
const { validator } = require('../../middleware');
const { authControllers } = require('../../controller');

const router = express.Router();

const { signUpValidationChain, loginValidationChain } = authValidationChain;
const { signUp, login } = authControllers;

router.post('/login', loginValidationChain, validator, login);

router.post('/signup', signUpValidationChain, validator, signUp);

module.exports = router;
