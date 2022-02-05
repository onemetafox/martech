import * as React from 'react';
import {Box, AppBar, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes  from 'prop-types';
import AuthComponent from '../components/authComponent';
import MenuComponent from '../components/menuComponent';

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
                    <MenuComponent color="black"/>
                </Box>
                <AuthComponent color="black"/>
            </AppBar>
            </HideOnScroll>
        </div>
    );

}
export default Header;