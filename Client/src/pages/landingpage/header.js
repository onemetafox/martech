import {React, useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import {Box, AppBar, Link, Button, Stack, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import AuthComponent from '../components/authComponent';

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
                        <AuthComponent/>
                    </AppBar>
                </HideOnScroll>
            <ToastContainer autoClose={2000} />
        </div>
    );

}
export default Header;