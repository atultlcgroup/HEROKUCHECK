
const d = new Date()
const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d) 
let fileName = `${da}_${mo}_${ye}.log`;
const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:`./logger/${fileName}`,
        timestampFormat:'YYYY-MM-DD HH:mm:ss'
    },
logger = SimpleNodeLogger.createSimpleLogger( opts );
module.exports={
    logger
}