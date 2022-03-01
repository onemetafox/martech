import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Pagemenu() {
  const navigate = useNavigate();
  
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgba(77, 89, 149, 0.06)',
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:'#3699FF',
    '&:hover': {
        color: '#ffffff',
        backgroundColor: '#3699FF',
    },
    marginRight:'10px',
    textTransform:'none',
    fontWeight:'normal',
    fontFamily: 'Poppins, Helvetica, "sans-serif"',
    boxShadow: 'none'
    }));
  return (
    <div>
        <PopupState variant="popover" popupId="support-button">
          {(popupState) => (
            <React.Fragment>
              <ColorButton variant="contained" {...bindTrigger(popupState)}>
              Knowledge base
              </ColorButton>
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
              <ColorButton variant="contained" {...bindTrigger(popupState)}>
                Support
              </ColorButton>
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
              <ColorButton variant="contained" {...bindTrigger(popupState)}>
                Platform
              </ColorButton>
              <Menu open={true} {...bindMenu(popupState)}>
                <MenuItem onClick={() => { navigate('/platform/budget'); popupState.close();}}>Budget</MenuItem>
                <MenuItem onClick={() => { navigate('/platform/ec2'); popupState.close();}}>EC2 Dashboard</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
    </div>
  );
}
