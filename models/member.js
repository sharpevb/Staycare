module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /*this represents whether it's a child, parent, emergencycontact*/
    membertype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //if we can send text messages from the app, where to send.
    textaddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: DataTypes.STRING,
    password: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  });

  Member.associate = function(models) {
    // We're saying that a Member should belong to a Family
    Member.belongsTo(models.Family, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Member;
};

// //COPIED FROM ONLINE
// module.exports = function(sequelize, DataTypes) {
//   var Category = sequelize.define('Category', {
//     name: { type: DataTypes.STRING, allowNull: false }
//   }, {
//     associate: function(models) {
//       Category.hasMany(models.Product, { onDelete: 'cascade' });
//     }
//   });
//   return Category
// }
