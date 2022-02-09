import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from '@mui/styles';
import { createMuiTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { 
    Box, 
    IconButton,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

import FaqDialog from './faqDialog';

import { contactStructure } from '../../config/const';

import {getAll, delContact, selectContact} from '../../actions/contactAction';

import Faq from './faq';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#E1F0FF',
    fontSize: '11px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '15px',
    marginRight: '15px',
    color:'#3699FF',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#3699FF',
    },
    boxShadow: 'none',
    height: '50%'
}));

const Content = () =>{
    
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px', marginBottom:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    bgcolor: 'background.flex',
                    backgroundColor:'#fff',
                    justifyContent:"space-between",
                    alignItems:"stretch",
                    borderBlockEnd:'solid 1px #EBEDF3',
                    height: '70px'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{ marginTop:'25px', marginLeft:'27px', fontSize: '1.275rem' }}>Help Desk (FAQ)</Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <ColorButton > Add FAQ</ColorButton>
                    </Box>
                </Box>
                <Box sx={{padding:'2rem'}}>
                    <Faq/>
                </Box>
            </Box>
            {/* <FaqDialog /> */}
        </Container>
    );
}
export default Content;
