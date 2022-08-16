const User = require('./User');

const Plant = require('./Plant');
const Details = require('./Details');

User.hasMany(Plant, {

const Project = require('./Project');

User.hasMany(Project, {

  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Plant.belongsTo(User, {
  foreignKey: 'user_id'
});

Details.belongsTo(Plant, {
  foreignKey: 'plant_id'
});

Plant.hasOne(Details, {
  foreignKey: 'plant_id',
  onDelete: "CASCADE"
});




module.exports = { User, Plant, Details };

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
