let express = require("express")
let Router = express.Router();
let userController = require("../controllers/user")
Router.get("/getProfile" , userController.getUserProfile)
module.exports=Router