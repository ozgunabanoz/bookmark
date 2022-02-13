// login controller

const { SuccessResponse, loginService } = require('../../../service');

const { findUser, comparePassword, createNewToken } = loginService;

exports.login = async (req, res, next) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const { password: hashedPassword, id } = await findUser(email); // first check if the user exists or not

    await comparePassword(password, hashedPassword); // check if the password is correct

    const token = createNewToken(id, email); // create a new jwt token
    const responseData = { id, email, token };
    const response = new SuccessResponse(undefined, responseData); // send a success response

    response.send(res);
  } catch (error) {
    next(error);
  }
};
