module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Contact.associate = function (models) {
    // We're saying that a oontact should belong to a child
    Contact.belongsTo(models.Child, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Contact;
};
