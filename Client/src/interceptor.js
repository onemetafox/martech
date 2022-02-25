import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from './config/authConfig';
import { callMsGroup } from "./config/graph";

const RequestInterceptor = (props) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0]);

  /* eslint-disable no-param-reassign */
  axios.interceptors.request.use(async (config) => {
    if (!account) {
      throw Error('No active account! Verify a user has been signed in.');
    }else{
      callMsGroup(account.accessToken).then((response) => {
        response.value.forEach(element => {
            if(element.displayName === "CHQ - martech-edp-developers"){
                account.developer = true;
            }
            if(element.displayName === "CHQ - martech-edp-admins"){
                account.admin = true;
            }
        });
        sessionStorage.setItem("auth", JSON.stringify(account));
        // toast.success("SignIn Successed!");
      });
    }

    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account,
    });

    const bearer = `Bearer ${response.accessToken}`;
    config.headers.Authorization = bearer;

    return config;
  });
  /* eslint-enable no-param-reassign */

  return (
    <>
      {props.children}
    </>
  );
};

export default RequestInterceptor;