import {React} from 'react';
import {Box, Container, Typography,} from '@mui/material';

const ServiceSection = () =>{

    return(
        <div>
            <Box sx={{
                height : {lg:'1500px', xs:'1800px'},
                backgroundColor:'#fff',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container maxWidth='lg'>
                    <Box
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                    >
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                            The journey of EDP was started with vision of centralized marketing data platform that provides, data availability via single source, common infrastructure, & Platform Integrations for customer (customer & potential-customer). With a set of capabilities for E2E Residential Marketing needs to help enable omni-channel 1:1                        </Typography>
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                            
                        </Typography>
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                            
                        </Typography>
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                            
                        </Typography>
                    </Box>
                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                    <Box
                        component="img"
                        sx={{
                            justifyContent:'center'
                        }}
                        src="/static/img/about-01.png"
                        />
                    </Box>
                    <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6' paddingTop={'50px'}>
                        
                    </Typography>
                    <Box 
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }} >
                        <Box display={'grid'} sx={{justifyContent:'center'}}>
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center'
                            }}
                            src="/static/img/about-02.png"
                            />
                        </Box>
                        <Box display={'grid'} sx={{justifyContent:'center'}}>
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center'
                            }}
                            src="/static/img/about-03.png"
                            />
                        </Box>
                    </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default ServiceSection;
