let pool = require("../databases/pg").pool

let getAccounts = ()=>{
      return new Promise(async(resolve , reject)=>{
        try{
            const client = await pool.connect()            
            const result = await client.query('select * from salesforce.account');
            const results = { 'results': (result) ? result.rows : null};
            resolve(results);
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
let updateAccount = ()=>{
    return new Promise(async(resolve , reject)=>{
      try{
          const client = await pool.connect()            
          const result = await client.query('select * from salesforce.account');
          const results = { 'results': (result) ? result.rows : null};
          resolve(results);
      }catch( e ){
          reject(e)
      }
    })
}
let deleteAccount = ()=>{
    return new Promise(async(resolve , reject)=>{
      try{
          const client = await pool.connect()            
          const result = await client.query('select * from salesforce.account');
          const results = { 'results': (result) ? result.rows : null};
          resolve(results);
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