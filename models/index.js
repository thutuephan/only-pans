const User = require('./User');
const Category = require('./Category');
const Recipe = require('./Recipe');

// Associations between recipe and category
Category.hasMany(Recipe, {
    foreignKey: 'category_id',
});

Recipe.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Associations between user and recipe

User.hasMany(Recipe, {
    foreignKey: 'user_id',

});
Recipe.belongsTo(User, {
    foreignKey: 'user_id',

})
module.exports = { User, Category, Recipe };


