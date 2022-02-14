import React, { useEffect, useState } from 'react';
import {
  Navigate, 
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const PrivateRoute = (props) =>{
  var auth = false;
  const account = JSON.parse(sessionStorage.getItem('auth'));
  if(account) {
    if(props.path === "/platform/ec2summary" || props.path === "/contact" || props.path === "/calendar" || props.path === "/calls" || props.path === "/ticket"){
      if(account.admin || account.developer){
        console.log("admin and developer");
        auth = true;
      }else{
        toast.error("You are not Admin or Developer!");
      }
    }else if(props.path === "/platform/budget"){
      if(account.admin){
        console.log("admin");
        auth = true;
        toast.error("You are not Admin!");
      }else{

      }
    }else{
      auth = false;
      toast.error("Authentication Failed!");
    }
  }else{
    toast.error("Authentication Failed!");
  }
  
  return (<div>
    {auth? props.children: <><Navigate to="/" /></>}
  </div>);

  // return auth ? props.children : (<div> <ToastContainer autoClose={2000}  /> <Navigate to="/" /></div>) ;
};

export default PrivateRoute;