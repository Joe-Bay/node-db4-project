const db = require('../data/connection')
const knex_cleaner = require('knex-cleaner')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('Recipes')
}

function getShoppingList(recipeId){
    return db('Instructions')
    .join('Recipes', 'Instructions.recipeId', '=', 'Recipes.id')
    .select('Instructions.id', 'Recipes.RecipeName')
    .join('Ingredients', 'Instructions.ingredientId', '=', 'Ingredients.id')
    .select('Instructions.ingredientId', 'Ingredients.IngredientName')
}

/*
select Recipes.RecipeName, Ingredients.IngredientName, Instructions.Quantity
from Instructions
JOIN Recipes on Instructions.recipeId = Recipes.id
JOIN Ingredients on Instructions.ingredientId = Ingredients.id
*/