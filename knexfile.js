// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-east-06.cleardb.net',
      database: 'heroku_73c9ddbc9faf64b',
      user:     'b4c943f50d92af',
      password: 'bf3d32e6'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
