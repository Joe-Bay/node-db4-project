
exports.seed = function(knex) {
  return knex('Instructions').insert([ // recipeid steps ingredientid quantity
    { recipeId: 1, Steps: "Throw an egg in a blender", ingredientId: 1, Quantity: 56}
  ])
};
