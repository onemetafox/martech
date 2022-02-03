import {React, useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import {Box, AppBar, Link, Button, Stack, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { callMsGraph, callMsGroup } from "../../config/graph";
import { useIsAuthenticated } from "@azure/msal-react"

import { loginRequest } from "../../config/authConfig";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
}


HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
const Header = (props) =>{
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const isAuthenticated = useIsAuthenticated();

    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    useEffect(()=>{
        var data = sessionStorage.getItem("auth");
        if(data){
            setIsLoggedin(true);
        }else{
            setIsLoggedin(false);
        }
    },[])
    const handleLogin = () => {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        instance.loginPopup(loginRequest)
        .then((res)=>{
            setIsLoggedin(true);
            sessionStorage.setItem("auth", res);
            toast.success("SignIn Successed!");
            callMsGroup(res.accessToken).then((response) => {console.log(response); setGraphData(response);});
        }).catch(e => {
            console.log(e);
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
            <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar sx={{
                        background:'none',
                        boxShadow:'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between'}}>
                        <Box>
                            <Box
                                component="img"
                                sx={{
                                    height: '88px',
                                    width: '128px',
                                    paddingLeft: '29px',
                                }}
                                src="/static/img/favicon.svg"
                            />
                            <Link
                            component="button"
                            variant="body3"
                            underline='none'
                            onClick={() => {
                                navigate('/');
                            }}
                            color={'white'}
                            sx={{
                                paddingLeft:"35px"

                            }}
                            >
                                Home
                            </Link>
                            <Link
                            component="button"
                            variant="body3"
                            underline='none'
                            onClick={() => {
                                navigate('/platform/budget');
                            }}
                            color={'white'}
                            sx={{
                                paddingLeft:"35px"
                                
                            }}
                            >
                                Platform
                            </Link>
                            <Link
                            component="button"
                            variant="body3"
                            underline='none'
                            onClick={() => {
                                navigate('/calendar');
                            }}
                            color={'white'}
                            sx={{
                                paddingLeft:"35px"
                                
                            }}
                            >
                                Support
                            </Link>
                            <Link
                            component="button"
                            variant="body3"
                            underline='none'
                            onClick={() => {
                                navigate('/about');
                            }}
                            color={'white'}
                            sx={{
                                paddingLeft:"35px"
                                
                            }}
                            >
                                About
                            </Link>
                        </Box>
                        <Box sx={{marginTop:'20px', marginRight:'20px'}}>
                            { isAuthenticated ?  <Link
                                component="button"
                                variant="body3"
                                underline='none'
                                onClick={() => handleLogout()}
                                color={'white'}
                                sx={{paddingLeft:"35px"}}>
                                Sign Out
                            </Link> :<Link
                                component="button"
                                variant="body3"
                                underline='none'
                                onClick={() => handleLogin()}
                                color={'white'}
                                sx={{paddingLeft:"35px"}}>
                                Sign In
                            </Link> }
                        </Box>
                    </AppBar>
                </HideOnScroll>
            <ToastContainer autoClose={2000} />
        </div>
    );

}
export default Header;