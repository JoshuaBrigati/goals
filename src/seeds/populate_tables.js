exports.seed = function(knex, Promise) {
  return Promise.join(
    knex("users").del(),
    knex("goals").del(),

    knex("users").insert({ username: "alice", password: "alice" }),

    knex("users").insert({
      username: "bob",
      password: "bob"
    })
  );
};
