import {React} from 'react';
import {Box, Container, Typography, Grid, Link} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const timeClass = {
    dot:{
            '&::before':{
            borderRadius: '50%',
            background: '#575bde',
            border: '4px solid #fff',
            content: "",
            height: '1rem',
            left: '-3px',
            position: 'absolute',
            top: '-33px',
            width: '1rem'
        }
    }
}
const Step = () =>{

    return(
        <div>
            <Box sx={{
                height : '500px',
                backgroundColor:'#f6f6f9',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container xl>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h5'
                        >
                        4 Steps to Personalize a message to Customer
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'10px'}
                            variant='h6'
                        >
                        {/*At vero eos et accusamus et iusto odio dignissimos ducimus.*/}
                        </Typography>
                        <Box
                        sx={{marginTop:'40px'}}
                        >
                            <Grid container spacing={1}>
                                <Grid container item spacing={3} >
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant='h7' color="text.secondary" gutterBottom>
                                            Step 1
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                                Understand who?
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                                Resolve marketing contact identity throughout their lifecycle at Comcast (agnostic of LOB/channel)
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant='h7' color="text.secondary" gutterBottom>   
                                            Step 2
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                                Informs What?
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                                Levarage Contact Identity insights to inform strategy and develop profile. Levarage aggregate consumer data for high level analysis
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                        <Typography variant='h7' color="text.secondary" gutterBottom>   
                                            Step 3
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                                Improves How?
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                                Real time interaction data allows for dynamic audience assignment based on pre-determined conditions and business rules.Determine the best channel to engage the customer
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275, backgroundColor:'#1d1a3d'}}>
                                        <CardContent>
                                            <Typography variant='h7' color="white" gutterBottom>   
                                            Step 4
                                            </Typography>
                                            <Typography variant="h5" color="white" component="div" paddingTop={'10px'}>
                                                Interact & Connect
                                            </Typography>
                                            <Typography variant="h6" color="white" fontWeight={'light'} paddingTop={'10px'}>
                                                Deploy personalized messages and experiences and record the consumer interaction (as data) for futher analysis and strengthen recommendation engines and enhance predictive action
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'50px'}
                            fontSize={'13px'}
                            color={'text.secondary'}
                        >
                        {/*If you need any help, make sure to <Link> book a demo.</Link>*/}
                        </Typography>
                    </Container>
            </Box>
        </div>
    );

}
export default Step;