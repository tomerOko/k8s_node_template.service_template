import {z, sources, initializeEnv, loaders} from '@chatmate/zodenv'



const fromK8sOrDocker = loaders.fromProcces()
const secrets = loaders.fromENV('/src/ZodEnv/example/files/GCP/GCP_Secrets.env')
const serviceMesh = loaders.fromENV('/src/ZodEnv/example/files/GCP/GCP_ServiceMesh.env')

const environmentTypes = {
    prod: production,
    production,
    dev: development,
    development,
    local: localRun,
    localRun,
    staging,
    test
}

const currentInvironment = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'local'
const environmentConfigs = environmentTypes[currentInvironment as keyof typeof environmentTypes]

//TODO: in the schema: add more usage of the diffrent env sources 

const userWritenEnvSchema = z.object({
    /**some comment about the filed the url/ */
    dbUrl : z.string().default(environmentConfigs.DB.service.url),
    /** if no pussword needed set defalt to '' */
    dbPass : z.string().default(sources(['a','b','c'])),
    stripe : z.object({
        userID : z.number().default(sources([null,2,], 7)),
        chargeEndpoint : z.string().default(sources(['a','b','c'],'http://localhost:2702'))
    }).default({})
})


const ENVs = initializeEnv(userWritenEnvSchema)

export default ENVs

