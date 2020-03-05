let mongoose = require("mongoose");



let userSchema = mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, unique: true},
    password: {type: String, require: true},
    status: {type: String, enum: ['ACTIVE','DEACTIVE','PENDING','DELETE'], default: "ACTIVE"}
})

module.exports = mongoose.model('User', userSchema)
