// import dotenv from 'dotenv'

import { ServerOptions } from "http"

// //@desc make sure to import before other mudules that dipends on it
// dotenv.config({path: "/app/src/config/configs.env"});


interface ENV {
    server:{
        port:number,
        serverOptions?: ServerOptions
    }
}

class EnvironmentVariables {

    private env : ENV

    public getENVs(){
        if(this.env)
            return this.env
        this.env = this.loadENVs()
    }

    private loadENVs():ENV{
        return {
            server:{
                port:3000
            },
        }

    }
}

export{EnvironmentVariables}
