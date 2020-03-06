let mongoose = require("mongoose")
let chatSchema = new mongoose.Schema({
   message: {type: String},
   status: {type: String, enum: ["ACTIVE","DELETE"], default: "ACTIVE"},
   deleted: {Type: Boolean, default: false},
   userId: {type: String, required: true},
   userProfile: {type: Object()},
   groupId: {type: String, required: true}
})
module.exports = mongoose.model('Chat', chatSchema)
