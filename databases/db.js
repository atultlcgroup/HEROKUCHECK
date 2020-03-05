let  mongoose = require('mongoose');
let mongoUrl = require('../config').ENV_OBJ.MONGO_URL
mongoose.connect(mongoUrl, {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log(`database connected`)
});

module.exports={
    db
}