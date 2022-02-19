import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { 
    Box, 
    Button
} from '@mui/material';

import EdpdatasetDialog from './edpdatasetDialog';

import { edpdatasetStructure } from '../../config/const';

import {getAll, selectEdpdataset} from '../../actions/edpdatasetAction';

import Edpdataset from './edpdataset';

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
    const [edpdatasetData, setEdpdatasetData] = useState(edpdatasetStructure);
    const [isAdmin, setIsAdmin]= useState(false);
    
    useEffect(()=>{
        dispatch(getAll());
        var auth = JSON.parse(sessionStorage.getItem("auth"));
        if(auth && auth.admin){
            setIsAdmin(true);
        }
    },[])
    const edpdatasetsData = useSelector(selectEdpdataset);
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
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
                        <Box sx={{ marginTop:'25px', marginLeft:'27px', fontSize: '1.275rem' }}>EDP Datasets</Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        {isAdmin?<ColorButton onClick={(evt)=>setOpen(true)}> Add Content</ColorButton>:""}
                        
                    </Box>
                </Box>
                <Box sx={{padding:'2rem'}}>
                    {edpdatasetsData.map((edpdataset, index)=>{
                        if(edpdataset){
                            return(<Edpdataset sx={{marginTop:"15px"}} isAdmin = {isAdmin} key={index} edpdatasetData = {edpdataset}/>);
                        }
                    })}
                </Box>
            </Box>
            <EdpdatasetDialog expanded = {expanded} setExpanded={setExpanded}  open = {open} edpdatasetData = {edpdatasetData}  setOpen = {setOpen}/>
        </Container>
    );
}
export default Content;
