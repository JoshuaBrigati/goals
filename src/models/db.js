var knex = require("knex")({
  // TODO: ADD DATABASE CONNECTION INFO HERE
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite3"
  }
});

module.exports = knex;
