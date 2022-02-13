const { User } = require('../../../model');
const { hashPassword, generateToken } = require('../../../util');

exports.createNewUser = async (email, password) => {
  const hashedPassword = await hashPassword(password); // hash the password
  const userData = { email, password: hashedPassword };
  const newUser = new User(userData); // create new user instance and save it

  await newUser.save();

  const newUserJSON = newUser.toJSON();
  const { email: userEmail, id } = newUserJSON;
  const token = generateToken(id, userEmail); // generate new jwt token
  const responseData = { email: userEmail, id, token };

  return responseData;
};
