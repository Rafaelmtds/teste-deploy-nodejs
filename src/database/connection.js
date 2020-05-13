const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(config.staging);

module.exports = connection;