const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO
// movieSchema
// name:       String
// director:   String
// nowPlaying: Boolean
// theatres:   Array of theatre names
const movieSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // }
    name: String,
    director: String,
    nowPlaying: Boolean,
    theaters: [String],
});

// TODO
// Export mongoose model
// create a collection called 'movies' whose documents will look like movieSchema
const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie;
