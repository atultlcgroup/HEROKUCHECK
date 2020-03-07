let express= require("express")
let Router = express.Router();
let accountController = require('../controllers/account')
Router.get("/getAccounts",accountController.getAccounts)


module.exports= Router;