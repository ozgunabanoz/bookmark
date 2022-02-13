// User model

const { DataTypes } = require('sequelize');

const { db } = require('../../db');

const { STRING } = DataTypes;

const User = db.define('User', {
  email: { type: STRING },
  password: { type: STRING },
});

module.exports = { User };
