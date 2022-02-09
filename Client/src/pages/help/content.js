import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { 
    Box, 
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

import FaqDialog from './faqDialog';

import { contactStructure, faqStructure } from '../../config/const';

import {getAll, delFaq, selectFaq} from '../../actions/faqAction';

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
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [faqData, setFaqData] = useState(faqStructure);
    const [isAdmin, setIsAdmin]= useState(false);
    
    useEffect(()=>{
        dispatch(getAll());
        var auth = JSON.parse(sessionStorage.getItem("auth"));
        if(auth.admin){
            setIsAdmin(true);
        }
    },[])
    const faqsData = useSelector(selectFaq);
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
                        {isAdmin?<ColorButton onClick={(evt)=>setOpen(true)}> Add FAQ</ColorButton>:""}
                        
                    </Box>
                </Box>
                <Box sx={{padding:'2rem'}}>
                    {faqsData.map((faq, index)=>{
                        if(faq){
                            return(<Faq sx={{marginTop:"15px"}} isAdmin = {isAdmin} key={index} faqData = {faq}/>);
                        }
                    })}
                </Box>
            </Box>
            <FaqDialog expanded = {expanded} setExpanded={setExpanded}  open = {open} faqData = {faqData}  setOpen = {setOpen}/>
        </Container>
    );
}
export default Content;
