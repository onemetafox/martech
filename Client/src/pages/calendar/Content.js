import {React, StrictMode} from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import {Box, Button} from '@mui/material';
import { styled } from '@mui/material/styles';

import Calendar from './calendar';
import EventDialog from './eventDialog';


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#E1F0FF',
    fontSize: '11px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:'#3699FF',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#3699FF',
    },
    boxShadow: 'none'
}));

const Content = () =>{
    const [open, setOpen] = useState(false);
    const [eventData, setEventData] = useState({start:'', end:''});
    const handleClickOpen = () => {
        setOpen(true);
    };
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
                        <Box sx={{ marginTop:'25px', marginLeft:'27px', fontSize: '1.275rem' }}>Team Calendar</Box>
                    </Box>
                </Box>
                <Box sx={{padding:'2rem'}}>
                    <Calendar />
                </Box>
            </Box>
            <EventDialog open={open} eventData = {eventData} setOpen={setOpen}/>
        </Container>
        
    );
}
export default Content;
