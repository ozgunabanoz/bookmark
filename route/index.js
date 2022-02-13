const authRoutes = require('./auth');
const bookmarkRoutes = require('./bookmark');
const bookRoutes = require('./book');

// routing
exports.router = (app) => {
  app.use('/auth', authRoutes);
  app.use('/bookmark', bookmarkRoutes);
  app.use('/book', bookRoutes);
};
