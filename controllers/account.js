let accountModel = require("../models/account")

let getAccounts=(req,res)=>{
    try{
        accountModel.getAccounts().then(data=>{
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
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
        accountModel.deleteAccount().then(data=>{
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