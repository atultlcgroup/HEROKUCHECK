let express = require("express")
let config = require("./config").ENV_OBJ
let cors = require("cors")
let userRoute = require("./routers/user")
let body_praser = require("body-parser")
let app = express();
app.use(cors())
app.use(body_praser())
let port = process.env.PORT ||  config.PORT;
app.use("/user" , userRoute)
app.use("/", (req , res)=>{
  res.status(200).send(`SERVER started AT ${port}`)
})
app.listen(port , ()=>{
  // console.log(process.env.NODE_ENV)
    console.log( `SERVER started AT ${port}`)
})

