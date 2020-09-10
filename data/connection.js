const knex = require('knex')

const knexfile = require('../knexfile')

const environment = process.env.DATABASEURL || 'development'

const config = knexfile[environment]

module.exports = knex(config)