/**
 * 'server.ts' resposabilities: NETWORKING
 *      * i think it is always a small module
 *      a. eventually load the 'app.ts'
 *      b. listening on port/ports
 *      c. add a websocket server
 *      d. log about listening on port
 */

import {app} from './app'

import {createServer} from 'http' 
import {EnvironmentVariables} from './config/ENV/index'

interface ServerInterface {
    listen()
}

class Server implements ServerInterface{

    constructor(){}


    listen() {
        const server = createServer()
        server.addListener('request',app)
        server.listen(new EnvironmentVariables().getENVs().server.port)
    }
}





// import logging from './middleware/logging';
// import './socketServer'
// import { socketServer } from './socketServer';
// import { Socket } from 'net';

// import app from "./app"


// //@desc lunch the server and start listening on port (make sure the port in your hole deplotment stuff is eaqul to to port the massage below printing :-/ ) 
// const httpServer = http.createServer(app);
// httpServer.on('upgrade', (request, socket, head) => {
//   socketServer.handleUpgrade(request, socket as Socket, head, (sock) => {
//     socketServer.emit('connection', sock, request);
//   });
// });


// // const server = app.listen(3000); // TO DO => learn and document the diffrence between <http.createServer(app)> and <app.listen
// httpServer.listen(process.env.PORT, () => logging.info(`Server is running on default host :${process.env.PORT}`));


// import {app} from './app'
// import {createServer} from 'http' 
// import {EnvironmentVariables} from './config/ENV/index'

// interface ServerInterface {
//     listen()
// }

// class Server implements ServerInterface{

//     constructor(){}


//     listen() {
//         const server = createServer()
//         server.addListener('request',app)
//         server.listen(new EnvironmentVariables().getENVs().server.port)
//     }
// }




