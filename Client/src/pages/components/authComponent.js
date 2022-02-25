import {React, useState, useEffect} from 'react';
import {Box, Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import { toast } from "react-toastify";
import { callMsGroup } from "../../config/graph";

import { loginRequest } from "../../config/authConfig";
const AuthComponent = (props) =>{
    const navigate = useNavigate();

    const [isLoggedin, setIsLoggedin] = useState(false);

    const { instance } = useMsal();

    useEffect(()=>{
        var data = JSON.parse(sessionStorage.getItem("auth"));
        if(data){
            setIsLoggedin(true);
        }else{
            setIsLoggedin(false);
        }
    },[])
    const handleLogin = () => {
        instance.loginPopup(loginRequest)
        .then((res)=>{
            callMsGroup(res.accessToken).then((response) => {
                response.value.forEach(element => {
                    if(element.displayName === "CHQ - martech-edp-developers"){
                        res.account.developer = true;
                    }
                    if(element.displayName === "CHQ - martech-edp-admins"){
                        res.account.admin = true;
                    }
                });
                sessionStorage.setItem("auth", JSON.stringify(res.account));
                setIsLoggedin(true);
                navigate('/about')
                toast.success("SignIn Successed!");
            });
        }).catch(e => {
            toast.error("SignIn Failed!");
        });
    }
    const handleLogout = () => {
        instance.loginPopup()
        .then((res)=>{
            setIsLoggedin(false);
            sessionStorage.removeItem("auth");
            toast.success("SignOut Successed!");
        }).catch(e => {
            console.log(e);
            toast.error("SignOut Failed!");
        });
    }
    return(
        <div>
            <Box sx={{marginTop:'25px', marginRight:'20px'}}>
                { isLoggedin ?  <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => handleLogout()}
                    color={props.color}
                    sx={{paddingLeft:"35px"}}>
                    Sign Out
                </Link> :<Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => handleLogin()}
                    color={props.color}
                    sx={{paddingLeft:"35px"}}>
                    Sign In
                </Link> }
            </Box>
        </div>
    );

}
export default AuthComponent;