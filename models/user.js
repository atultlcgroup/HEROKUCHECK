let userModel = require('../schemas/user')

let getUserProfile = (userId)=>{
    return new Promise((resolve, reject)=>{
        userModel.findOne({_id: userId},["firstName" , "lastName" , "email"]).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })  
}

let checkUser = (userId)=>{
    return new Promise((resolve, reject)=>{
        userModel.findOne({_id: userId},["_id" , "status"]).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

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


let updatePassword = (userId , oldPassword , newPassword)=>{
    return new Promise((resolve , reject)=>{
        userModel.findOne({_id : userId , password : oldPassword},['_id']).then(data=>{
            if(!data){
                reject("Invalid User")
            }
            userModel.updateOne({_id : userId} , {$set : {password: newPassword}}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        }).catch(err=>{
            reject(err)
        })
    }).catch((err)=>{
        reject(err)
    })
}


let updateProfile = (userId , firstName , lastName)=>{
    return new Promise((resolve , reject)=>{
        userModel.updateOne({_id : userId} , {$set : {firstName: firstName, lastName: lastName}}).then(data=>{
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    }).catch((err)=>{
        reject(err)
    })
}
module.exports={
    login,
    signup,
    checkUser,
    updatePassword,
    getUserProfile,
    updateProfile
}


