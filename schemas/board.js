let mongoose = require("mongoose");
let boardSchema  = mongoose.Schema({
    name: {type: String, default: ""},
    pic: {type: String, default: ""},
    members: {type: []},
    owner: {type: String, require: true},
    status: {type: String, enum: ['ACTIVE','DEACTIVE','DELETE'], default: "ACTIVE"},
    lastMessage : { type : Object() ,default: ""}
})
module.exports = mongoose.model('Board', boardSchema)
