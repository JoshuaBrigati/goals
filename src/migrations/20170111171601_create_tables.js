exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists("users", function(table) {
      table.increments("id");
      table.string("username");
      table.string("password");
    }),
    knex.schema.createTableIfNotExists("goals", function(table) {
      table.increments("id");
      table
        .integer("user_id")
        .references("id")
        .inTable("users");
      table.string("goaltitle");
      table.string("description");
      table.boolean("completed");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users"),
    knex.schema.dropTable("goals")
  ]);
};
