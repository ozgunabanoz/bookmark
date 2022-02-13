// Bookmark model

const { DataTypes } = require('sequelize');

const { User } = require('../User');
const { db } = require('../../db');

const { STRING } = DataTypes;

const Bookmark = db.define('Bookmark', {
  googleId: { type: STRING },
  title: { type: STRING },
  author: { type: STRING },
});

Bookmark.belongsTo(User);

module.exports = { Bookmark };
