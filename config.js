
let NODE_ENV = process.env.NODE_ENV || 'development';
let ENV_OBJ ;
switch (NODE_ENV) {
    case 'development':
        ENV_OBJ = {PORT: 4000 }
        break;
    case 'microtest':
        ENV_OBJ = {PORT: 5000 }
        break;
    case 'production':
        console.log(`ggggg`)
        ENV_OBJ = {PORT: 6000 }
            break;
    default:
        console.log(`ggggg1`)
        ENV_OBJ = {PORT: 7000 }
        break;
}
console.log(ENV_OBJ)
module.exports={
    ENV_OBJ
}