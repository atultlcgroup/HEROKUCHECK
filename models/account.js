let pg = require("../databases/pg").pool

let getAccounts = ()=>{
      return new Promise(async(resolve , reject)=>{
        try{
            const client = await pool.connect()            
            const result = await client.query('select * from salesforce.account');
            const results = { 'results': (result) ? result.rows : null};
            console.log(results)
            JSON.stringify(results)
            resolve(results)
        }catch( e ){
            reject(e)
        }
      })
}

module.exports={
    getAccounts
}