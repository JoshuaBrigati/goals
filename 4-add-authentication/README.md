# Add authentication

In this final section you will need to use JWTs to implement a full-stack authentication system. JWTs are simply web tokens that are encoded on the server during a login and sent to the client. The client will attach this token as a header in every subsequent request. The server can then check this header and decode it to retrieve the relevant User information and perform actions based on it.

## Bare Minimum Requirements

* [ X ] Uncomment and read the authentication code in client/app.js
* [ X ] In routes.js, convert the pseudocode in the authentication routes into working code
* [ X ] Update your previous Goal model and /goals routes to save Goals for a specific user
  * Look at the documentation for [jwt-simple](https://www.npmjs.com/package/jwt-simple) to learn how to encode and decode JWTs

## Advanced Content

* Abstract the JWT methods into a separate file called auth-helpers.js
