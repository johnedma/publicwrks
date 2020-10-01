'use strict';
module.exports = (sequelize, DataTypes) => {
  const Art = sequelize.define('Art', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    artist: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    dated: DataTypes.STRING
  }, {});
  Art.associate = function(models) {
    // associations can be defined here
  };
  return Art;
};