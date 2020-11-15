## Mongoose Exercise
This exercise will build out 2 schemas, and several routes to POST and GET information to and from our database.

The starter folder already has the skeleton code for connecting to mongodb, as well as the base files for the models and routes.

Look for comments that say TODO to build out the mongoose Schemas and the routes.
Attributes for Schemas: Look inside the starter files for additional information:
```
+--------------------+
|       Theatre      |
+--------------------+
| name: String       |
| VIP: Boolean       |
| playing: Array     |
+--------------------+
```

```
+--------------------+
|       Movie        |
+--------------------+
| name: String       |
| director: String   |
| nowPlaying: Boolean|
| theatres: Array    |
+--------------------+
```

As you write your routes, test them out in Insomnia.

You’ll be going back and forth between files as you build this exercise out, but a suggestion of a general way to approach this exercise:
* always `npm install` first to get all the dependencies
* you can run the project using `npm run start`
* start with the models, and build out the schemas.
* define the routes to use in server.js
* work on the routes in theatres.js
* work on the routes in movies.js