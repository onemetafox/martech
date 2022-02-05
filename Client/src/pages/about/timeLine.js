import {React} from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';

const TimeLine = () =>{

    return(
        <div>
            <Box sx={{
                height : {lg:'390px', xs:'650px'},
                backgroundColor:'#f6f6f9',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h4'
                        >
                            Timeline
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'10px'}
                            variant='h5'
                        >
                            The best stories are told from start to finish, that's why we keep track of history.
                        </Typography>
                        <Box
                        sx={{flexDirection: 'row', borderTopStyle:'solid', borderTopColor:'#ddd', borderTopWidth:'1px', marginTop:'70px'}}
                        >
                            <Grid container spacing={1}>
                                <Grid container item spacing={3} >
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Understand who?
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                       Resolve marketing contact identity throughout their lifecycle at Comcast (agnostic of LOB/channel)
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Informs What?
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                    Levarage Contact Identity insights to inform strategy and develop profile. Levarage aggregate consumer data for high level analysis
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Improves How?
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                    Real time interaction data allows for dynamic audience assignment based on pre-determined conditions and business rules.Determine the best channel to engage the customer
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Interact & Connect
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                        Deploy personalized messages and experiences and record the consumer interaction (as data) for futher analysis and strengthen recommendation engines and enhance predictive action
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default TimeLine;