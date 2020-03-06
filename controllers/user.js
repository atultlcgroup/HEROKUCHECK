let userModel = require("../models/user")
let jwt = require("../helper/jwt")

let getUserProfile = (req , res)=>{
    try{
        if(!req.userId){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
            userModel.getUserProfile(req.userId).then(data=>{
                res.status(200).send({code: 200, message: 'success' , data: data})
            }).catch(e=>{
                res.status(500).send({code: 500, message: e})
            })
        }catch(e){
        res.status(500).send({code : 500 , message : e})
    }
}


let login = (req , res)=>{
    try{
        console.log(req.body)
        if(!req.body.username || !req.body.password){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        userModel.login(req.body.username , req.body.password).then(data=>{
            if(!data)
            {
                res.status(401).send({code: 401, message: `username: ${req.body.username} does not exist.`})
                return ;
            }
            if(data.password != req.body.password){
                res.status(401).send({code: 401, message: `password: ${req.body.password} does not match.`})
                return ;
            }
            if(data.status != "ACTIVE"){
                res.status(401).send({code: 401, message: `user is not active, status: ${data.status}`})
                return ;
            }
            let token = jwt.generateToken({userId : data._id})
            res.status(200).send({code : 200 , message : 'success', data : token})
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
            res.status(200).send({code: 200, message: 'success'})
        }).catch(e=>{
            res.status(500).send({code: 500, message: e})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }
}


let updatePassword = (req , res)=>{
    try{
        if(!req.userId || !req.body.oldPassword || !req.body.newPassword){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        userModel.updatePassword(req.userId, req.body.oldPassword, req.body.newPassword).then(data=>{
            res.status(200).send({code: 200, message: 'success'})
        }).catch(e=>{
            res.status(500).send({code: 500, message: e})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }   
}


let updateProfile = (req , res)=>{
    try{
        if(!req.userId || !req.body.firstName || !req.body.lastName){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        userModel.updateProfile(req.userId, req.body.firstName, req.body.lastName).then(data=>{
            res.status(200).send({code: 200, message: 'success'})
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
    signup,
    updatePassword,
    updateProfile
}
