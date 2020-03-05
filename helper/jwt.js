let jwt = require("jsonwebtoken")
let key = "FIRSTAPP";

let generateToken =(data)=>{
    return jwt.sign(data,key, {expiresIn: '1h'})
}


module.exports={
    generateToken
}