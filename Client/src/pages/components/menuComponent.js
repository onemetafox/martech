import * as React from 'react';
import {Box, Link, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes  from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

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

const MenuComponent = (props) =>{
    const navigate = useNavigate();
    return(
        <div>
            <Box component="img" onClick={() => { navigate('/about'); }} sx={{ height: '88px', width: '128px', paddingLeft: '29px', }} src="/static/img/favicon.svg" />
            <PopupState variant="popover" popupId="support-button">
            {(popupState) => (
                <React.Fragment>
                <Link component="button" variant="body3" underline='none' 
                    onClick={() => { navigate('/knowledgebase'); }} color={props.color}  sx={{ paddingLeft:"35px" }}
                    variant="contained" {...bindTrigger(popupState)}
                >Knowledge base</Link>
                <Menu open={true} {...bindMenu(popupState)}>
                    <MenuItem onClick={() => { navigate('/edpdatasets'); popupState.close();}}>EDP Datasets</MenuItem>
                    <MenuItem onClick={() => { navigate('/edpdq'); popupState.close();}}>EDP DQ Rules</MenuItem>
                </Menu>
                </React.Fragment>
            )}
            </PopupState>
            <PopupState variant="popover" popupId="support-button">
                {(popupState) => (
                    <React.Fragment>
                        <Link component="button" variant="body3" underline='none' 
                            onClick={() => { navigate('/support'); }} color={props.color}  sx={{ paddingLeft:"35px" }}
                            variant="contained" {...bindTrigger(popupState)}
                        >Support</Link>
                        <Menu open={true} {...bindMenu(popupState)}>
                            <MenuItem onClick={() => { navigate('/help'); popupState.close();}}>Help Desk</MenuItem>
                            <MenuItem onClick={() => { navigate('/contact'); popupState.close();}}>Team Contacts </MenuItem>
                            <MenuItem onClick={() => { navigate('/calendar'); popupState.close();}}>Team Calendar</MenuItem>
                            <MenuItem onClick={() => { navigate('/calls'); popupState.close();}}>On-Call Support</MenuItem>
                            <MenuItem onClick={() => { navigate('/ticket'); popupState.close();}}>OPS Summary</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            <PopupState variant="popover" popupId="platform-button">
                {(popupState) => (
                    <React.Fragment>
                        <Link component="button" variant="body3" underline='none' 
                            color={props.color} sx={{ paddingLeft:"35px" }}
                            variant="contained" {...bindTrigger(popupState)}
                        >Platform</Link>
                        <Menu open={true} {...bindMenu(popupState)}>
                            <MenuItem onClick={() => { navigate('/platform/budget'); popupState.close();}}>Budget</MenuItem>
                            <MenuItem onClick={() => { navigate('/platform/ec2'); popupState.close();}}>EC2 Dashboard</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            <Link   component="button"  variant="body3"  underline='none' onClick={() => { navigate('/about');  }} color={props.color} sx={{ paddingLeft:"35px" }}>
                About
            </Link>
        </div>
    );

}
export default MenuComponent;