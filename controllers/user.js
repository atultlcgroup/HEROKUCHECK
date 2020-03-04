let getUserProfile = (req , res)=>{
    try{
        res.status(200).send({code : 200 , message : "success" , data : req.query})

    }catch(e){
        res.status(500).send({code : 500 , message : e})
    }
}

module.exports={
    getUserProfile
}
