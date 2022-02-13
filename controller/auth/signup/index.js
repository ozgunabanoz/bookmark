// signup controller

const { signUpService, SuccessResponse } = require('../../../service');

const { checkUserExists, createNewUser } = signUpService;

exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const { email, password } = body;

    await checkUserExists(email); // check if a user with the same email already exists

    const responseData = await createNewUser(email, password); // if not, create a new user
    const response = new SuccessResponse(undefined, responseData); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
