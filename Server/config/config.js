import jwt from 'jwt-simple';
import 'dotenv/config'
export const timeSetting = {
  secret       : '123456789qwertyuiop',
  timeZone     : "EST",
  momentFormat : 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  sessionScreteKey: jwt.encode("session", '123456789qwertyuiop')
};
export const dbConf = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PWD,
  db: process.env.MONGO_DB,
  mongooseDebug: process.env.MONGOOSE_DEBUG
}  