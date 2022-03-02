import React, { useState } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import { loginRequest } from './config/authConfig';
import { callMsGroup } from "./config/graph";
import CircularProgress from '@mui/material/CircularProgress';

const RequestInterceptor = (props) => {
  const { instance, accounts } = useMsal();
  const { flag, setFlag } = useState(false);
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
        sessionStorage.setItem("auth", JSON.stringify(account));
        setFlag(true);
      })
    });
  }
  return (
    flag?<>{props.children}</>:<CircularProgress/>
  );
};

export default RequestInterceptor;