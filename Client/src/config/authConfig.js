/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { conf } from './config';
// import queryString from 'query-string'
import { LogLevel } from "@azure/msal-browser";
// import { CODE_CHALLENGE_METHOD, CODE_CHALLENGE } from './PCKEConfigs';
/*
clientId : 152227d5-8abe-4f73-a068-efbfeeb0e723
secret : fJw7Q~odQS2vShaTeAbM30X59pvmHVlZs~r6W
*/
/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
//  export const auth = () => {
//     return queryString.stringifyUrl({
//         url: `https://login.microsoftonline.com/906aefe9-76a7-4f65-b82d-5ec20775d5aa/oauth2/v2.0/authorize`,
//         query: {
//             client_id: "152227d5-8abe-4f73-a068-efbfeeb0e723",
//             redirect_uri: "http://localhost:3000/calendar",
//             response_type: 'code',
//             response_mode: 'query',
//             scope: [
//                 'openid',
//                 'offline_access',
//                 'email',
//                 'profile',
//                 'user.read',
//             ].join(" "),
//             state: JSON.stringify({ provider: 'Microsoft' }),
//             code_challenge: CODE_CHALLENGE,
//             code_challenge_method: CODE_CHALLENGE_METHOD
//         }
//     });
// }
export const msalConfig = {
    auth: {
        clientId: conf.client_id,
        authority: "https://login.microsoftonline.com/906aefe9-76a7-4f65-b82d-5ec20775d5aa",
        redirectUri: "http://"+ conf.host +conf.redirect,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [`api://<API CLIENT ID>/.default`]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/",
    graphGroupEndpoint: "https://graph.microsoft.com/v1.0/me/memberOf?$select=displayName&$top=999"
};
