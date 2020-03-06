let express = require("express")
let Router = express.Router();
let chatController = require('../controllers/chat')
Router.post("/chat",chatController.createChat)
module.exports = Router;