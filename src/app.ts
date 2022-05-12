/**
 * 'app.ts' resposabilities: LOGIC
 *      a. app level midllewares 
 *      b. helth check
 *      c. log about beginning os service initialization proccess
 *      d. load environment variables (port, dev/prod/test, ) 
 *      e. load dependency container? (maybe just set the NODE_ENV value
 *         and let the dependency container module take care about loading
 *         the right dependencies)
 *      f. create and check connections:
 *          1. persistance DB
 *          2. cach DB
 *          3. third parti APIs
 */



// import express from "express";
// const app = express();
// import helmet from 'helmet'
// import hpp from 'hpp'
// import { topRouter } from "./routes";
// import cors from 'cors'
// import rateLimiter from './middleware/rateLimiter'
// import {connectNow} from  './config/monogoSercive'
// import { rootRouter } from "./router/sub_routes/All_API";
// import session from'express-session'
// import { sessionConfigs } from "./config/sessionConfigs";

// // // in case of any client app
// // app.use(express.static('public'))
// // commented out becouse the server is an api server only, there is no 'client' to hold static and send

// // // in case of sending HTTP requests from local client to to local server
// // import cors from 'cors'
// // app.use(cors());
// // commented out becouse there no plans on making cros origin calls

// // Helmet secures your Express app by setting various HTTP headers
// app.use(helmet());
// // Hpp do protection against HTTP Parameter Pollution attacks
// app.use(hpp());

// // // Compress responses
// // app.use(compression());

// // Allow express parse req url and json body
// app.use(express.json());

// //@desc URLs matadata parser
// app.use(express.urlencoded({extended : false}))

// app.use( "/", topRouter );

// export {app}





// //well.. :)
// const app = express()


// //@desc  express-rate-limit
// app.use(rateLimiter);


// //@desc session storage with express-sessions and mongo-sessions-connect
// app.use(session(sessionConfigs));
 

// //@desc cros env to make the browser not block requerst from diffrent port (domain = protocol+host+port. cors = diffrent domains)
// //if serving the client as a static folder from the server, or if using nginx (or any other reverse proxy) thi part can be removed as well
// const corsConfig = {
//   origin: true,
//   credentials: true,
// };
// app.use(cors(corsConfig));


// // //@desc Static Folder 
// // //'_dirname' means 'if the run command lunced from any directory other then the one containing this file, the use the absolute path of this file'
// // app.use(express.static(path.join(__dirname, 'dist')))


// //@desc json parser
// app.use(express.json())


// //@desc URLs matadata parser
// app.use(express.urlencoded({extended : false}))


// // @desc logging middleware (not for errors)
// const NAMESPACE = 'Server';
// app.use((req:Request, res:Response, next:NextFunction) => {
//     logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
//     res.on('finish', () => {
//         logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
//     })
//     next();
// });


// // @desc routers tree 
// app.use('/' , rootRouter) 


// // @desc logging middleware for errors
// app.use((req, res, next) => {
//   const error = new Error('Not found');
//   res.status(404).json({
//       message: error.message
//   });
// });


// export default app
