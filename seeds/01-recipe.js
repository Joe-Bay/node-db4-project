
exports.seed = function(knex) {
  return knex('Recipes').insert([
    { RecipeName: 'Chocolate Chip Cookies' },
    { RecipeName: 'Peach Cobbler' },
    { RecipeName: 'DQ Flamethrower' },
    { RecipeName: 'Cherry Pie' }
  ])
};
