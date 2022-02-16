import jwt from 'jwt-simple';
import 'dotenv/config'
export const timeSetting = {
  secret       : '123456789qwertyuiop',
  timeZone     : "EST",
  momentFormat : 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  sessionScreteKey: jwt.encode("session", '123456789qwertyuiop')
};
export const dbConf = {
  mongo_host: process.env.mongo_host,
  mongo_port: process.env.mongo_port,
  mongooseDebug: process.env.MONGOOSE_DEBUG
}  