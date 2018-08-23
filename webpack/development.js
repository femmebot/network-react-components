'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
// Uncomment to help debug/iterate on webpack-config
// console.log(JSON.stringify(environment, null, 2))
module.exports = environment
