//import those files
let cinfigDB = require('./config/db');
let app = require('./config/express');
let http = require('http');
let debug = require('debug')('comp229:server');

//provide the port number
var port = normalisePort(process.env.PORT || '3000');
app.set('port', port);

//connect with database
configDB();

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


//normalize a port into a numer, string, or false
function normalizePort(val){
    var port = parseInt(val, 10);

    if(isNaN(port)){
        //name pipe
        return val;
    }

    if(port >= 0){
        //port number
        return port;
    }

    return false;
}

//event listener for http server "error" event
function OnError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    var bind = typeof port === 'string'
    ? 'pipe ' + port
    : 'Port ' + port; 

    //handle specific listen errors with friendly message
    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated provileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//event lister for http server "listening" event

function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + port;
    
    console.log('++++The app is running on  http://localhost:' + addr.port);
    debug('listening on ' + bind);
}