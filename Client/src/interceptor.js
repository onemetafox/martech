import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import { loginRequest } from './config/authConfig';
import { callMsGroup } from "./config/graph";
import { Navigate } from 'react-router-dom';

const RequestInterceptor = (props) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0]);
  if(account){
    loginRequest.account = account;
    instance.acquireTokenSilent(loginRequest).then((response)=>{
      callMsGroup(response.accessToken).then((response)=>{
        response.value.forEach(element => {
            if(element.displayName === "CHQ - martech-edp-developers"){
                account.developer = true;
            }
            if(element.displayName === "CHQ - martech-edp-admins"){
                account.admin = true;
            }
        });
        sessionStorage.setItem("auth", JSON.stringify(account));})
    });
    return (
      <>
        {props.children}
      </>
    );
  }
  
};

export default RequestInterceptor;