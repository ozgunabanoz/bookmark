const { Sequelize } = require('sequelize');

const { DB_USERNAME, DB_PW, DB_NAME, DB_HOST } = require('../config');

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PW, {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    logging: true,
  },
  define: {
    timestamps: false,
  },
});

const dbSync = async () => {
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Database connection error');
    console.error(error);
  }
};

module.exports = { db: sequelize, dbSync };
