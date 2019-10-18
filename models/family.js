module.exports = function(sequelize, DataTypes) {
  var Family = sequelize.define("Family", {
    familyname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primaryphone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // associate: function(models) {
    //   Family.hasMany(models.Member, {
    //     foreignKey: {
    //       allowNull: false
    //     },
    //     onDelete: "cascade"
    //   });
    // }
  });

  return Family;
};
