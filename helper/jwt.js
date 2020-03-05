let jwt = require("jsonwebtoken")
let key = "FIRSTAPP";

let generateToken= (data)=>{
    return jwt.sign(data,key, {expiresIn: '1h'})
}

let verifyToken= (token)=>{
    try{
        return jwt.verify(token , key)
    }catch( e ){
        return ""
    }
}
module.exports={
    generateToken,
    verifyToken
}