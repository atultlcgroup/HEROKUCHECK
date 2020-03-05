let userModel = require("../models/user")
let getUserProfile = (req , res)=>{
    try{
        res.status(200).send({code : 200 , message : "success" , data : req.query})
    }catch(e){
        res.status(500).send({code : 500 , message : e})
    }
}


let login = (req , res)=>{
    try{
        if(!req.body.username || !req.body.password){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        userModel.login(req.body.username , req.body.password).then(data=>{
            res.status(200).send({code : 200 , message : 'success'})
        }).catch((err)=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }
}

let signup = (req , res)=>{
    try{
        if(!req.body.username || !req.body.password || !req.body.firstName || !req.body.lastName){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        userModel.signup(req.body.username, req.body.password, req.body.firstName, req.body.lastName).then(data=>{
            res.status(200).send({code: 200, message: 'success', data: data})
        }).catch(e=>{
            res.status(500).send({code: 500, message: e})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }
}


module.exports={
    getUserProfile,
    login,
    signup
}
