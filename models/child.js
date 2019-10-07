module.exports = function(sequelize, DataTypes) {
  var Child = sequelize.define("Child", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4]
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    childimage: DataTypes.STRING
  });

 /* Child.associate = function(models) {
    // We're saying that a Car should belong to an Customer
    Child.belongsTo(models.Contact, {
      foreignKey: {
        allowNull: true
      }
    });
  };*/
  return Child;
};
