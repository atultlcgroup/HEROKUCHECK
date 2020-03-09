let accountModel = require("../models/account")
let logger = require('../logger').logger;
let getAccounts=(req,res)=>{
    try{
        logger.info(`getAccounts api called in controller file. data: {query: ${JSON.stringify(req.query)} , body: ${JSON.stringify(req.body)} , headers: ${JSON.stringify(req.headers)}} ,userId: ${req.userId?req.userId:""}`)
        accountModel.getAccounts().then(data=>{
        logger.info(`getAccounts successfully called in controller file.  data: {query: ${JSON.stringify(req.query)} , body: ${JSON.stringify(req.body)} , headers: ${JSON.stringify(req.headers)}} ,userId: ${req.userId?req.userId:""} , result :${JSON.stringify(data.results)} }`)
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
            logger.info(`getAccounts has error in controller file.  data: {query: ${JSON.stringify(req.query)} , body: ${JSON.stringify(req.body)} , headers: ${JSON.stringify(req.headers)}} ,userId: ${req.userId?req.userId:""} , error :${JSON.stringify(err)} }`)
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
        logger.info(`getAccounts has error in controller file.  data: {query: ${JSON.stringify(req.query)} , body: ${JSON.stringify(req.body)} , headers: ${JSON.stringify(req.headers)}} ,userId: ${req.userId?req.userId:""} , error :${JSON.stringify(e)} }`)
    }
}

let createAccount=(req,res)=>{
    try{
        
        if(!req.body.name|| !req.body.phone || !req.body.accountnumber){
            res.status(401).send({code : 401 ,message: "Inpalid Inputs"})
            return;
        }
        accountModel.createAccount(req.body.name, req.body.phone ,req.body.accountnumber).then(data=>{
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
    }
}

let updateAccount=(req,res)=>{
    try{
        if(!req.params.id|| !req.body.name){
            res.status(401).send({code : 401 ,message: "Inpalid Inputs"})
            return;
        }
        accountModel.updateAccount(req.params.id , req.body.name).then(data=>{
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
    }
}

let deleteAccount=(req,res)=>{
    try{
        if(!req.params.id){
            res.status(401).send({code : 401 ,message: "Inpalid Inputs"})
            return;
        }
        accountModel.deleteAccount(req.params.id).then(data=>{
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
    }
}





module.exports={
    getAccounts,
    createAccount,
    updateAccount,
    deleteAccount
}