let express = require("express")
let config = require("./config").ENV_OBJ
let cors = require("cors")
let userRoute = require("./routers/user")
let body_praser = require("body-parser")
let helmet = require('helmet')
let db = require("./databases/db")
let auth = require("./auth/authenticate")
let chatRoute = require('./routers/chat')
let pool = require('./databases/pg').pool
let app = express();
app.use(cors())
app.use(helmet())
app.use(body_praser())
app.use("/api" , auth)
let port = process.env.PORT ||  config.PORT;
app.use("/user" ,userRoute)
app.use("/api/user" ,userRoute)
app.use("/api/chat" ,chatRoute)



app.use('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

app.use("/", (req , res)=>{
  res.status(200).send(`SERVER started AT ${port}`)
})
app.listen(port , ()=>{
  //console.log(process.env.NODE_ENV)
    console.log( `SERVER started AT ${port}`)
})

