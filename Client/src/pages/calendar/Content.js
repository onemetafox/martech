import {React, StrictMode} from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import {
    Box, 
} from '@mui/material';

import Calendar from './calendar';

const Content = () =>{
    var i = 1;
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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            
                            }}
                    >
                        
                        <Box
                            sx={{
                                marginTop:'25px',
                                marginLeft:'27px',
                                fontSize: '1.275rem'
                            }}
                        >
                            Team Calendar
                        </Box>
                    </Box>
                </Box>
                <Box sx={{padding:'2rem'}}>
                    <StrictMode>
                        
                        <Calendar />
                    </StrictMode>
                </Box>
            </Box>
        </Container>
    );
}
export default Content;
