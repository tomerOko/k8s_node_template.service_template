import { ServerInterface, Server } from "./server";

class Index {

    private server:ServerInterface

    constructor(
        private initialized:boolean = false
    ){}

    async initialize(){
        this.initialized = true
    }

    async runServer(){
        this.checkThatServerBeenInitialaized()
        this.logDetalisAboutTheServer()
    }

    private checkThatServerBeenInitialaized(){
        if (!this.initialized) {
            //TODO: use error code and add log
            throw new Error("tring to runs the server before invironment been initialized");
        }
    }

    private logDetalisAboutTheServer() {
        //TODO: use a real logger
        //TODO:log details about the service on booting
        console.log(
            `service initialization has started at ${Date.now().toLocaleString()} ` , `Version: ${process.version}`) //TODO: 1.replace with a propper logger 2. add some info like $ip, $time, $serviceName, $NODE_ENV
    }

}

const logSuccessfulServiceRun = () => {
    //TODO:
}

const run = async () => {
    const service = new Index()
    await service.initialize()
    await service.runServer()
    logSuccessfulServiceRun()
}

run()



/**
 *  about this file:
 *  index.ts is the main file of the project.
 *  its responsabilities are:
 *      1. create the right invironment for the application to run
 *          a. load environment variables and secrets
 *          b. create and check connections (db, cache, third parties providers...)
 *          c. initialize configurations/dependencies/utilities 
 *          d. log about beginning of service initialization proccess
 *      2.load the server
 */







//TODO:
// import {Secret} from './config/ENV/index'
// import {DepenendenciesContainer} from '...'

// DepenendenciesContainer.DBConnections.connectMongoDB()
// DepenendenciesContainer.DBConnections.connectCacheDB()
// DepenendenciesContainer.eventBus.connect()
// DepenendenciesContainer.thirdPartyApis.connectAll()
// DepenendenciesContainer.serviceMesh.connect()