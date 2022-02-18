import React from 'react';
import {
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setPath, selectPrePath } from "./actions/authAction";
import { toast } from "react-toastify";
const PrivateRoute = (props) =>{
  var auth = false;
  var path = false;
  const prePath = useSelector(selectPrePath);
  const dispatch = useDispatch();
  const account = JSON.parse(sessionStorage.getItem('auth'));
  if(account) {
    if(props.path === "/platform/ec2" || props.path === "/contact" || props.path === "/calendar" || props.path === "/calls" || props.path === "/ticket"){
      if(account.admin || account.developer){
        auth = true;
        path = true;
        dispatch(setPath(props.path));
      }else{
        toast.error("Un-Authorized to Access!");
      }
    }else if(props.path === "/platform/budget"){
      if(account.admin){
        auth = true;
        dispatch(setPath(props.path));
      }else{
        auth =false;
        path = true;
        toast.error("Un-Authorized to Access!");
      }
    }else{
      auth = false;
      toast.error("Authentication Failed!");
    }
  }else{
    toast.error("Authentication Failed!");
  }
  if(auth){
    return (<div>
      {props.children}
    </div>);
  }else{
    if(path)
    {
      return <Navigate to={prePath} />
      // return location.state && location.state.referer
    }else{
      <Navigate to="/" />
    }
  }
  

  // return auth ? props.children : (<div> <ToastContainer autoClose={2000}  /> <Navigate to="/" /></div>) ;
};

export default PrivateRoute;