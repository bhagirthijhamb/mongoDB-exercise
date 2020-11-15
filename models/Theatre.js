const mongoose = require('mongoose');
const { Schema } = mongoose;
// TODO
// Import Movie schema for use in theatre schema

// TODO
// theatreSchema
// name:     String
// VIP:      Boolean , default: false
// playing:  Array of movie names that are current playing
const theatreSchema = new Schema({
    name: String,
    VIP: {
        type: Boolean,
        default: false,
    },
    playing: [String],
});

// TODO
// Export mongoose model
module.exports = mongoose.model("Theater", theatreSchema);