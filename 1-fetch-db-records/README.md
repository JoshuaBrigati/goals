# Fetch DB Records

In this sprint you will be setting up the Database layer of your application.

## Bare Minimum Requirements

* [ X ] Use [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) to map the entities you need to track. At minimum:

  * **Users**. Usernames and passwords for authentication.
  * **Goals**. Users can keep track of multiple Goals which will eventually be completed. Goals should also contain a field for a description of the Goal (detailed notes about what the user wishes to accomplish).
  * Save a screenshot of your schema in this directory.

* [ X ] Complete knexfile.js in accordance with the [Knex documentation](http://knexjs.org/#knexfile):

  * it should contain connection information to db.sqlite3 (required during migrations)

* [ X ] Complete the migration file in ./migrations

  * This file will be run when you first set up your database (and can be used to "tear down" the database if the need arises).
  * OPTIONAL: Add some seed data for the tables in seeds/populate_tables.js

* [ X ] Run your migration to build out the database.

* [ ] Write models for each entity in the database.
  * The User model should be able to
    * add a new user (raw usernames and passwords are fine for now)
    * retrieve by username
  * The Goals Model should be able to
    * add a new Goal,
    * retrieve a Goal by id
    * update a Goal to "completed" by id
    * and find all Goals by user

### Tips

* Use the sqlite3 CLI to add and view test data when setting up your database

## Advanced Content

* [ ] Add a Posts entity to your database. Each Goal can have multiple posts (notes) attached to it, allowing the User to track their progress.
  * Update your schema
  * Add a new migration which adds the Posts table
  * Write a model for Posts
* Think of other features you might want to add and design schema to incorporate them.
* Connect to MySQL instead of SQLite
