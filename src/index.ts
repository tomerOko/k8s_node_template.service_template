/**
 * 'index.ts' resposabilities: PROGRAMM, ENVIRONMENT
 *      a. eventually load the server
 *      b. helth check
 *      c. log about beginning os service initialization proccess
 *      d. load environment variables (port, dev/prod/test) 
 *          1. DB address
 *          2. NODE_ENV
 *          3. cluster level env's, DockerFile level env's, CI/CD level env's, local level env's (.env file / json / .js)
 *      e. load secrets
 *          1. DB credentials
 *          2. encryption's passwords
 *          3. service mesh (if it need's any credentials)
 *      e. load dependency container? (maybe just set the NODE_ENV value
 *         and let the dependency container module take care about loading
 *         the right dependencies)
 *      f. create and check connections:
 *          1. persistance DB
 *          2. cach DB
 *          3. third parti APIs
 *          4. event bus
 *          5. service mesh
 */


import * as process from 'process';
console.log(`service has started at ${Date.now().toLocaleString()} ` , `Version: ${process.version}`) //TODO: 1.replace with a propper logger 2. add some info like $ip, $time, $serviceName, $NODE_ENV
