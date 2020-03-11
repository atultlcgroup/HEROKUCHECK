let express = require('express')
let Router = express.Router();
let boardController = require("../controllers/board")
Router.post("/createBoard", boardController.createBoard)
Router.get("/getBoards", boardController.getBoards)
Router.delete("/deleteBoard/:id", boardController.deleteBoard)
module.exports = Router;