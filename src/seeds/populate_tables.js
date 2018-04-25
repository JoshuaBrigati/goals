exports.seed = function(knex, Promise) {
  return Promise.join(
    knex("users").del(),
    knex("goals").del(), // TODO: DELETE ALL ENTRIES IN EXISITING TABLES

    // Insert seed entries
    knex("users").insert({ username: "alice", password: "alice" }),

    knex("users").insert({
      // :(
      username: "bob",
      password: "bob"
    }),

    knex("goals").insert({
      user_id: 1,
      goaltitle: "Kill myself",
      description: "I hate angular and sql. I am going to shoot myself",
      completed: false
    }),

    knex("goals").insert({
      user_id: 1,
      goaltitle: "Kill myself again",
      description: "I hate angular and sql. I am going to shoot myself",
      completed: false
    })
  ); // :(

  // TODO: INSERT DATA INTO TABLES
};
