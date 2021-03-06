const express = require('express');
const movieRouter = require('./routes/movies')
// const theatreRouter = require('./routes/theatres')
const app = express();
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/movie-theatres';
const PORT = 5000;

// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  })

// Express body parser middleware
//
app.use(express.json({ extended: false }));

// TODO
// Define Routes
app.use('/movies', movieRouter);
app.use('/theatres', require('./routes/theatres'));

// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})