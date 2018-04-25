//var knex = require("knex");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "/Users/joshuabrigati/hratx33-solo-sprints/src/db.sqlite3"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
