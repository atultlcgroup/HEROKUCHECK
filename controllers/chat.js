let createChat = (req, res)=>{
    try{
        res.status(200).send({code: 200, message: 'success'})
    }catch( e ){
        res.status(500).send({code: 500, message: e})
    }
}
module.exports={
    createChat
}