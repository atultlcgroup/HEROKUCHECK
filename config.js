
let NODE_ENV = process.env.NODE_ENV || 'development';
let ENV_OBJ ;
switch (NODE_ENV) {
    case 'development':
        ENV_OBJ = {PORT: 4000,
        MONGO_URL: 'mongodb+srv://atul511996:golu511996@cluster0-synji.mongodb.net/test' 
        }
        break;
    case 'microtest':
        ENV_OBJ = {PORT: 5000,
        MONGO_URL: 'mongodb+srv://atul511996:golu511996@cluster0-synji.mongodb.net/test' 
        }
        break;
    case 'production':
        ENV_OBJ = {PORT: 6000,
        MONGO_URL: 'mongodb+srv://atul511996:golu511996@cluster0-synji.mongodb.net/test'  
        }
        break;
    default:
        ENV_OBJ = {PORT: 7000,
        MONGO_URL: 'mongodb+srv://atul511996:golu511996@cluster0-synji.mongodb.net/test' 
        }
        break;
}
module.exports={
    ENV_OBJ
}