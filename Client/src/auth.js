import React from 'react';
import {
  Navigate, 
} from "react-router-dom";

const PrivateRoute = (props) =>{
  var auth = false;
  var account = JSON.parse(sessionStorage.getItem('auth'));
  if(account) {
    if(props.path === "/platform/ec2summary" || props.path === "/contact" || props.path === "/calendar" || props.path === "/calls"){
      if(account.admin || account.developer){
        auth = true
      }
    }else if(props.path === "/platform/budget"){
      if(account.admin){
        console.log("admin",account.admin);
        auth = true
      }
    }else{
      auth= false;
    }
  }
  return auth ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;