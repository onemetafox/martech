import React, { useEffect, useState } from 'react';
import {
  Route,
  Navigate, 
  Routes,
  Outlet 
} from "react-router-dom";

// import fakeAuth from './fakeAuth';
const PrivateRoute = (props) =>{
  // const [auth, setAuth] = useState(false);
  // useEffect(()=>{
  //   const account = JSON.parse(sessionStorage.getItem('auth'));
  //   if(props.path == "/platform/ec2summary" || props.path == "/contact" || props.path == "/calendar" || props.path == "/calls"){
  //     if(account.admin || account.developer){
  //       setAuth(true);
  //     }
  //   }else if(props.path == "/platform/budget"){
  //     if(account.admin){
  //       console.log("admin",account.admin);
  //       setAuth(true);
  //     }
  //   }else{
  //     setAuth(false);
  //   }
  // },[props]);
  var auth = false;
  var account = JSON.parse(sessionStorage.getItem('auth'));
  if(account) {
    if(props.path == "/platform/ec2summary" || props.path == "/contact" || props.path == "/calendar" || props.path == "/calls"){
      if(account.admin || account.developer){
        auth = true
      }
    }else if(props.path == "/platform/budget"){
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