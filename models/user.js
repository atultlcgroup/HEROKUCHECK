let userModel = require('../schemas/user')
let jwt = require("../helper/jwt")
let login=(username , email)=>{
            let insertName = new userModel({
                name : "Atul Kumar Srivastava"
            })
            insertName.save().then((data)=>{
                console.log(`Success`)
            }).catch((err)=>{
                console.log(err)
            })
}

let signup = (username , password , firstname , lastname)=>{
        return new Promise((resolve , reject )=>{
                let insertUser = new userModel({
                    firstName: firstname,
                    lastName: lastname,
                    password: password,
                    email: username
                })
                insertUser.save().then(data=>{
                    let token = jwt.generateToken({userId : data._id})
                    resolve(token)
                }).catch(( e )=>{
                    reject(e)
                })
            })
}
module.exports={
    login,
    signup
}


