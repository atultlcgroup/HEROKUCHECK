let userModel = require('../schemas/user')
let login=(username , password)=>{
    return new Promise((resolve, reject)=>{
            userModel.findOne({email : username}).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
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
                    resolve("Success")
                }).catch(( e )=>{
                    reject(e)
                })
            })
}
module.exports={
    login,
    signup
}


