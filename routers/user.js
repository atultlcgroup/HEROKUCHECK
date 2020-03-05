let express = require("express")
let Router = express.Router();
let userController = require("../controllers/user")
Router.get("/getProfile" , userController.getUserProfile)
Router.post("/login" , userController.login)
Router.post("/signup" , userController.signup)
Router.put("/updatePassword" , userController.updatePassword)
Router.put("/updateProfile" , userController.updateProfile)




module.exports=Router