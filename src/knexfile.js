module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
