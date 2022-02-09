import jwt from 'jwt-simple';
export const timeSetting = {
    secret       : '123456789qwertyuiop',
    timeZone     : "EST",
    momentFormat : 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    sessionScreteKey: jwt.encode("session", '123456789qwertyuiop')
  };
  