import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import { dbConf } from './config/config';
const app = express();
app.use(helmet());
app.use(hpp());

app.use(cookieParser());

let mongoUri = "";
if(dbConf.user){
    mongoUri = "mongodb://"+dbConf.user + ":" + dbConf.pwd+"@"+dbConf.host+":"+dbConf.port+"/"+dbConf.db;
}else{
    mongoUri = "mongodb://"+dbConf.host + ":" + dbConf.port + "/" + dbConf.db
}
mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
if (dbConf.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

app.use(cors());

app.use(router);

app.options('*', cors());

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);