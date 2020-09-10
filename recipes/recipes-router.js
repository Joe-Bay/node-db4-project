const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json({message: err.message}))
})

router.get('/:id', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(shopList => {
        res.status(200).json(shopList)
    })
    .catch(err => res.status(500).json({message: err.message}))
})

router.get('/:id/steps', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(instructions => {
        res.status(200).json(instructions)
    })
    .catch(err => res.status(500).json({message: err.message}))
})



module.exports = router