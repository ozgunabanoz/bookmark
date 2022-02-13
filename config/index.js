const dotenv = require('dotenv');

dotenv.config(); // retrieve environment variables from .env file

// export them as variables
const PORT = process.env.PORT || 3000; // PORT NUMBER
const DB_HOST = process.env.DB_HOST; // DATABASE HOST NAME
const DB_NAME = process.env.DB_NAME; // DATABASE NAME
const DB_USERNAME = process.env.DB_USERNAME; // DATABASE USERNAME
const DB_PW = process.env.DB_PW; // DATABASE PASSWORD
const JWT_SECRET = process.env.JWT_SECRET; // JWT SECRET FOR SIGNING TOKENS

module.exports = { PORT, DB_HOST, DB_NAME, DB_USERNAME, DB_PW, JWT_SECRET };
