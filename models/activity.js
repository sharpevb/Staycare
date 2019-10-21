module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    activitycode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activitydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    result1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    result2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Activity.associate = function(models) {
    // We're saying that an Activity should belong to a Member
    Activity.belongsTo(models.Member, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Activity;
};
