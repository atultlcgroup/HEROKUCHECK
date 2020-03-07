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
    // const result1 = await client.query('create table heroku_check (id integer, name text)');
    // const result2 = await client.query("insert into heroku_check values (1, 'hello database')");

    const result = await client.query('SELECT * FROM heroku_check');
    const results = { 'results': (result) ? result.rows : null};
    console.log(results)
    res.status(200).send(JSON.stringify(results))

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

