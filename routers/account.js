let express= require("express")
let Router = express.Router();
let accountController = require('../controllers/account')
Router.get("/getAccounts",accountController.getAccounts);
Router.post("/createAccount",accountController.createAccount);
Router.put("/updateAccount",accountController.updateAccount);
Router.delete("/deleteAccount",accountController.deleteAccount);





module.exports= Router;