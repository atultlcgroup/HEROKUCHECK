let jwt= require("../helper/jwt")
let userModel = require("../models/user")
module.exports=(req,res,next)=>{
    
    if(!req.headers['x-access-token']){
        res.status(401).send("Please Provide Token!!")
        return;
    }
    let token = req.headers['x-access-token']
    let tokenData = jwt.verifyToken(token)
    if(!tokenData['userId']){
        res.status(401).send("Invalid Token")
    }
    userModel.checkUser(tokenData['userId']).then(data=>{
        if(!data){
            res.status(401).send("Invalid User")
            return;
        }
        if(data['status']!='ACTIVE'){
            res.status(401).send(`User is not Active, status:${data['status']}`)
            return;
        }
        req.userId = data['_id']
        next();
    }).catch(e=>{
        res.status(401).send("Invalid User")
    })
}