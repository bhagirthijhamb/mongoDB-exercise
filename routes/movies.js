const express = require("express");
const router = express.Router();

// TODO
// Require Movie and Theatre mongoose models
const Movie = require('../models/Movie');
const Theatre = require("../models/Theatre");

// TODO
// @route  GET /movies
// @desc   Returns all movies in the database
// @access Public
router.get("/", async (req, res) => {
  // Gets all movie documents from movies collection
  const movies = await Movie.find();
  res.json(movies);
  // OR Promise syntax
  // Movie.find().then(movies => {
  //   res.json(movies);
  // })
  // OR Mongoose syntax
  // Movie.find((err, movies) => {
  //   res.json(movies);
  // })
});

// TODO
// @route  POST /movies/add
// @desc   Add a new movie to the database
// @access Public
router.post("/add", async (req, res) => {
  // try {
    // Create a new movie from the information entered through req.body
    const { name, director, nowPlaying } = req.body;

    const newMovie = new Movie({
      name: name,
      director: director,
      nowPlaying: nowPlaying,
      theaters: []
    })

    // Save the movie you just created, 
    const movie = await newMovie.save();
    // console.log(movie);
    // return a message using res.json() to confirm the movie has been saved successfully
    res.json(movie)
//   }
//   catch(err) {
//     console.log(err);
//   }
});

// TODO
// @route  POST /movies/add/:theatreId
// @desc   Add a movie object to a theatre based on the theatreid passed in as a param, and that theatre name to the movies playing array
// @access Public
router.post("/add/:theatreId", async (req, res) => {
  const { theatreId } = req.params;
  const { name } = req.body;
  // Find the theatre based on the theatreID passed in from req.params
  const theatre = await Theatre.findById(theatreId);  
  // Find the movie based on the name passed in from req.body
  const movie = await Movie.findOne({ name: name });
  // Add the theatre name to the theatres array on the movie
  movie.theaters.push(theatre.name);
  // Save the movie
  const updatedMovie = await movie.save();
  // Then add the movie name onto the theatre's playing array
  theatre.playing.push(movie.name)
  // Save the theatre, 
  const updatedTheatre = await theatre.save();
  // and return a message using res.json() to confirm the movie and theatre has been saved successfully
  // res.json({ updatedMovie, updatedTheatre})
  res.json({ 
    updatedMovie: updatedMovie, 
    updatedTheatre: updatedTheatre
  })
});

// TODO
// Export router
module.exports = router;