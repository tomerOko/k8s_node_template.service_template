import express from "express";
const app = express();
import helmet from 'helmet'
import hpp from 'hpp'
import { topRouter } from "./routes";


// // in case of any client app
// app.use(express.static('public'))
// commented out becouse the server is an api server only, there is no 'client' to hold static and send

// // in case of sending HTTP requests from local client to to local server
// import cors from 'cors'
// app.use(cors());
// commented out becouse there no plans on making cros origin calls

// Helmet secures your Express app by setting various HTTP headers
app.use(helmet());
// Hpp do protection against HTTP Parameter Pollution attacks
app.use(hpp());

// // Compress responses
// app.use(compression());

// Allow express parse req url and json body
app.use(express.json());

//@desc URLs matadata parser
app.use(express.urlencoded({extended : false}))

app.use( "/", topRouter );

export {app}
