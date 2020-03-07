let accountModel = require("../models/account")

let getAccounts=(req,res)=>{
    try{
        accountModel.getAccounts() .then(data=>{
            res.status(200).send({code : 200 , message : "Succcess" , data : data.results})
        }).catch(err=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).send({code : 500 , message : e})
    }
}



module.exports={
    getAccounts
}