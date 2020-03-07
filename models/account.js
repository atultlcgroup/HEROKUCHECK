let pool = require("../databases/pg").pool

let getAccounts = ()=>{
      return new Promise(async(resolve , reject)=>{
        try{
            const client = await pool.connect()            
            const result = await client.query('select * from salesforce.account');
            const results = { 'results': (result) ? result.rows : null};
            resolve(JSON.stringify(results));
        }catch( e ){
            reject(e)
        }
      })
}



let createAccount = (name , phone , accountnumber)=>{
    return new Promise(async(resolve , reject)=>{
      try{

          const client = await pool.connect()            
          const result = await client.query(`insert into salesforce.account(name, phone, accountnumber) values(${name} , ${phone} , ${accountnumber})`);
          resolve(JSON.stringify(result));
      }catch( e ){
          reject(e)
      }
    })
}
let updateAccount = (id , name )=>{
    return new Promise(async(resolve , reject)=>{
      try{
          const client = await pool.connect()            
          const result = await client.query(`update salesforce.account set name = ${name} where id = ${id}`);
          resolve(JSON.stringify(result));
      }catch( e ){
          reject(e)
      }
    })
}
let deleteAccount = (id)=>{
    return new Promise(async(resolve , reject)=>{
      try{
          const client = await pool.connect()            
          const result = await client.query(`delete from salesforce.account where id = ${id}`);
          resolve(JSON.stringify(result));
      }catch( e ){
          reject(e)
      }
    })
}
module.exports={
    getAccounts,
    createAccount,
    updateAccount,
    deleteAccount
}