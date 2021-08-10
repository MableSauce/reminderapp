const localPgConnection = {
    host: "localhost",
    database: "reminder",
    user: "vance",
    password: process.env.DATABASE_PASSWORD
  };
  const dbConnection = process.env.DATABASE_URL || localPgConnection;
  module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./db/dev.sqlite3"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./db/migrations"
      },
      seeds: {
        directory: "./db/seeds"
      }
    },
    production: {
      client: "pg",
      connection: dbConnection,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: "./db/migrations"
      },
      seeds: {
        directory: "./db/seeds"
      }
    }
  };