let boardSchema = require("../schemas/board")
let createBoard= (name , members , owner)=>{
    return new Promise((resolve , reject )=>{
            try{
                let boardModel = new boardSchema({
                    name: name,
                    members: members,
                    owner: owner
                })
                    boardModel.save().then(data=>{
                        resolve(data)
                    }).catch(err=>{ 
                        reject(err)
                    })
                }catch( e ){
                    reject(e)
            }
    })
}


let getBoards= (userId)=>{
    return new Promise((resolve , reject)=>{
        try{
            console.log(userId)
            boardSchema.find({ $or :[{members: userId }, {owner: userId}]}).select(["name" , "pic" , "owner","members"]).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        }catch(err){
            reject(err)
        }
    })
}



let isBoardUser=(userId, boardId)=>{
    return new Promise((resolve , reject)=>{
        try{
            boardSchema.findOne({_id: boardId, $or: [{members: userId },{owner: userId }],status : "ACTIVE"}).then(data=>{
                resolve( data )
            }).catch(( err )=>{
                reject( err )
            })
        }catch( e ){
            reject(e)
        }
    })
}

let  deleteBoard= (boardId)=>{
    return new Promise((resolve , reject)=>{
        try{
            boardSchema.updateOne({_id : boardId}, {$set: {status : 'DEACTIVE'}}).then((data)=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        }catch(err){
            reject(err)
        }
    })
}
module.exports ={
    createBoard,
    getBoards,
    isBoardUser,
    deleteBoard
}