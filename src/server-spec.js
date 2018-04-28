var test = require("tape");
var request = require("supertest");
var app = require("./server.js");

test("GET /zen", function(assert) {
  request(app)
    .get("/zen")
    .expect(200)
    .end(function(err, response) {
      assert.error(err);
      assert.equal(
        response.body,
        "There are no accidents. - Master Oogway",
        "The server should respond with a quote"
      );
      assert.end();
    });
});
