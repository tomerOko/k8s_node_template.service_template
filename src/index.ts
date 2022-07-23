/**
 *      d. load environment variables (port, dev/prod/test) 
 *          1. DB address
 *          2. NODE_ENV
 *          3. cluster level env's, DockerFile level env's, CI/CD level env's, local level env's (.env file / json / .js)
 *      e. load secrets
 *          1. DB credentials
 *          2. encryption's passwords
 *          3. service mesh (if it need's any credentials)
 */


// import {ENV , Secret} from './config/ENV/index'
// import {DPContainer} from './config/DependencyInjection/index'

// const envs = ENV()
// const secrets = Secret()
// const DPC = DPContainer()
// DPC.DBConnections.connectMainServiceDB()
// DPC.DBConnections.connectSessionDB()
// DPC.DBConnections.connectCacheDB()
// DPC.eventBus.checkConnection()
// DPC.thirdPartyApis.connectAll()
// DPC.serviceMesh.connect()
// server.strart()

import { ServerInterface, Server } from "./server";

// class Index {

//     private server:ServerInterface

//     constructor(
//         private initialized:boolean = false
//     ){}

//     async initialize(){

//     }

//     async runServer(){
//         this.checkThatServerBeenInitialaized()
//         this.logDetalisAboutTheServer()
//     }

//     private checkThatServerBeenInitialaized(){
//         if (!this.initialized) {
//             //TODO: use error code and add log
//             throw new Error("tring to runs the server before invironment been initialized");
//         }
//     }

//     private logDetalisAboutTheServer() {
//         //TODO: use a real logger
//         //TODO:log details about the service on booting
//         console.log(
//             `service initialization has started at ${Date.now().toLocaleString()} ` , `Version: ${process.version}`) //TODO: 1.replace with a propper logger 2. add some info like $ip, $time, $serviceName, $NODE_ENV
//     }

// }

// const logSuccessfulServiceRun = () => {
//     //TODO:
// }

// const run = async () => {
//     const service = new Index()
//     await service.initialize()
//     await service.runServer()
//     logSuccessfulServiceRun()
// }

// console.log("hallow")
// run()








console.log("hallow")