let boardModel= require("../models/board")
let createBoard = (req , res)=>{
    try{
        console.log(req.body)
        if(!req.body.name || !req.body.members){
            res.status(401).json({code : 401 , message : `Invalid Inputs`})
            return ;
        }
        if(!Array.isArray(req.body.members)){
            res.status(401).json({code : 401 , message : `Please enter member(s) Array`})
            return ;         
        }
        boardModel.createBoard(req.body.name , req.body.members , req.userId).then(data=>{
            res.status(200).send({code : 200 , message : 'success', boardId : data['_id']})
        }).catch((err)=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }
}


let getBoards = (req , res)=>{
    try{
        console.log(req.body)
        boardModel.getBoards(req.userId).then(data=>{
            res.status(200).send({code : 200 , message : 'success', data : data})
        }).catch((err)=>{
            res.status(500).send({code : 500 , message : err})
        })
    }catch( e ){
        res.status(500).json({code : 500 , message : e})
    }
}

let deleteBoard=(req , res)=>{
    try{
        if(!req.params.id){
            res.status(401).send({code : 401 ,message: "Inpalid Inputs"})
            return;
        }
        boardModel.isBoardUser(req.userId , req.params.id).then(data=>{
            if(!data['_id']){
                res.status(401).send({code : 401 ,message: "Inpalid Board"})
                return;
            }
            boardModel.deleteBoard(req.params.id).then(data=>{
                res.status(200).json({code : 200 , message : "Success" , data: data})
            }).catch((error)=>{
                res.status(500).json({code : 500 , message : error})   
            })
        }).catch(err=>{
            res.status(500).json({code : 500 , message : err})   
        })
    }catch(e){
        res.status(500).json({code : 500 , message : e})
    }
}
module.exports= {
    createBoard,
    getBoards,
    deleteBoard
}