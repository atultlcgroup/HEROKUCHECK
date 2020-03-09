let express= require("express")
let Router = express.Router();
let accountController = require('../controllers/account')
Router.get("/getAccounts",accountController.getAccounts);
Router.post("/createAccount",accountController.createAccount);
Router.put("/updateAccount/:id",accountController.updateAccount);
Router.delete("/deleteAccount/:id",accountController.deleteAccount);





module.exports= Router;