const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');
const { dbSync } = require('./db');
const { router } = require('./route');
const { errorHandler, notFoundHandler } = require('./middleware');

const app = express();

app.use(cors());
app.use(express.json());
router(app);
app.use(notFoundHandler); // for catching unknown routes
app.use(errorHandler); // for error handling

app.listen(PORT, async () => {
  console.log(`Server listening at PORT ${PORT}`);

  await dbSync(); // sync with the database after server started
});
