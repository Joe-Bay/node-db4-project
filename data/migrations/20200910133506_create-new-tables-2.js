
exports.up = function(knex) {
    return knex.schema.createTable('Recipes', tbl => {
        tbl.increments()
        tbl.string('RecipeName', 128).notNullable()
    })
    .createTable('Ingredients', tbl => {
        tbl.increments()
        tbl.string('IngredientName', 20).notNullable()
    })
    .createTable('Instructions', tbl => {
        tbl.increments()
        tbl.integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        tbl.string('Steps', 128).notNullable()
        tbl.integer('ingredientId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        tbl.float('Quantity').notNullable()
    })
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('Instructions')
      .dropTableIfExists('Ingredients')
      .dropTableIfExists('Recipes')
    };
