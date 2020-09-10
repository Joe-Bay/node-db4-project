
exports.seed = function(knex) {
  return knex('Ingredients').insert([
    { IngredientName: "Cherries" },
    { IngredientName: "Chocolate Chips" },
    { IngredientName: 'Flour' },
    { IngredientName: "Butter" },
    { IngredientName: "Cookie Dough" },
    { IngredientName: "Hamburger"}
  ])
};
