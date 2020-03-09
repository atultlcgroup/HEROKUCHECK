
let express = require("express")
let config = require("./config").ENV_OBJ;
const requestIp = require('request-ip');
let logger = require("./logger").logger
let cors = require("cors")
let userRoute = require("./routers/user")
let body_praser = require("body-parser")
let helmet = require('helmet')
let auth = require("./auth/authenticate")
let chatRoute = require('./routers/chat')
let accountRouting = require('./routers/account')
let app = express();
app.use(cors())
app.use(helmet())
app.use(body_praser())
app.use(requestIp.mw())
app.use("/api" , auth)
let port = process.env.PORT ||  config.PORT;
app.use("/user" ,userRoute)
app.use("/api/user" ,userRoute)
app.use("/api/chat" ,chatRoute)
app.use("/accounts",accountRouting)
logger.info(`index.js file called.`)

app.use("/SERVERPORT" , (req, res)=>{
    res.status(200).send(`SERVER STARTED AT ${port} and ${JSON.stringify(process.env)}`)
})
app.listen(port , ()=>{
  //console.log(process.env.NODE_ENV)
    logger.info( `SERVER started AT ${port}`)
})


