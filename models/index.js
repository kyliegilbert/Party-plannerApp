const User = require('./User');
const Game = require('./Game');
const Cake = require('./Cake')
const Theme = require('./Theme');
const Comment = require('./Comment');

User.hasMany(Game, {
  foreignKey: 'user_id'
});

User.hasMany(Cake, {
  foreignKey: 'user_id'
});

Cake.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Theme, {
  foreignKey: 'user_id'
});



module.exports = { User, Cake, Theme, Game, Comment };
