import {Db, MongoClient} from 'mongodb'

interface MongoActiveConnectionStore{
  connection : MongoClient | undefined,
  db : Db | undefined
}

const mongo:MongoActiveConnectionStore = {
    connection : undefined,
    db: undefined
}

/**
 * @param uri expected to specify a specific database
 */
export const createConnection = async (uri?:string) => {
  uri = checkUri(uri)
  try {
    mongo.connection = await new MongoClient(uri).connect()
    mongo.db = await mongo.connection.db()      
  } catch (error) {
      throw new Error()
  }
}

export const getConnection = async():Promise<MongoActiveConnectionStore> => {
  if(mongo.connection==undefined)
    await createConnection()
  return mongo
}

const checkUri = (uri:undefined|string):string => {
  if(uri ==undefined){
    if(process.env.MONGO_URI == undefined){throw new Error("no mongo connection string supplied")}
    return process.env.MONGO_URI
  }
  return uri
}

export const notExistingCollections =  async (collections:Array<string> , db:Db) : Promise<Array<string>>=>{
  const existingCollections = (await db.listCollections().toArray()).map(coll => coll.name)
  const existingCollectionsSet = new Set(existingCollections)
  return collections.filter(name => !existingCollectionsSet.has(name))
}

export const createCollections = async (collections:Array<string>):Promise<void> => {
  const db = mongo.db? mongo.db : (await getConnection()).db
  await Promise.all(collections.map( collectionName => db?.createCollection(collectionName)))
}












 

// const result = await db.collection("replicaset_mongo_client_collection").find({})

//     await client.close();

//     const database = await client.db('test'); 
//     const usersCollection = await database.collection("users"); //     db.collection("replicaset_mongo_client_collection").find({}, function(err, docs) {
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { name: 'Bill' };
//     const user = await usersCollection.findOne(query);


//check if collection exist


// const collection = await client.db(dbName).listCollections({}, { nameOnly: true }).toArray()
