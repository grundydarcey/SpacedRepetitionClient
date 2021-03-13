Spaced Repetition API

Links
Live Client: https://dg-spaced-repetition-client.vercel.app/login
Client Repository: https://github.com/grundydarcey/SpacedRepetitionClient
Live Server: https://safe-woodland-49880.herokuapp.com/
Server Repository: https://github.com/grundydarcey/spacedrepetitionserver


Summary
This is a language learning application using the Spaced Repetition learning technique.

Endpoints

/api/user
POST requests
Used for registering new users

/api/auth
POST requests authorization
Used for logging in and registering new users

/api/language
GET requests
This endpoint returns a list of a user's languages, and the words being studied in that language

/api/language/head
GET requests
This endpoint will return the next word to be studied

/api/language/guess
Users can POST their guess to each word as displayed in the /head endpoint, and receive feedback based on their response.
User's guess determines the position where the word will be placed in the list

Stack Used in this project:
-ReactJS
-React Router
-React Context
-HTML
-CSS
-Webpack
-Cypress for testing
-RESTful API
-Node & Express
-PostgresSQL
-Knex
-Supertest
-Mocha
-Chai