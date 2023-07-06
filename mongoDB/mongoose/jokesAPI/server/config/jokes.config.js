const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/jokes', {

})
    .then(() => console.log('Established a connection to the database jokes'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));