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
    toast.error("You have to signin first!");
  }
  if(auth){
    return (<div>
      {props.children}
    </div>);
  }else{
    if(path)
    {
      return <Navigate to={prePath} />
    }else{
      return <Navigate to="/" />
    }
  }
};

export default PrivateRoute;