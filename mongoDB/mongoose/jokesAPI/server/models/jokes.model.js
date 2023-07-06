const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});
 
const joke = mongoose.model('Jokes', JokesSchema);
 
module.exports = joke;