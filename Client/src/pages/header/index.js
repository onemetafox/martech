import React from 'react';
import {Breadcrumbs, Link, Typography,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Pagemenu from './menu';
import Profile from './profile';

const Header = (props) =>{
    const navigate = useNavigate();
    return (
        <div style={{width:'100%'}}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={0}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        bgcolor: 'background.flex',
                        backgroundColor:'#fff',
                        justifyContent:"space-between",
                        alignItems:"stretch",
                        height: "65px",
                        lineHeight: "1.5",
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                        <Box
                            component="img"
                            sx={{ height: '27px',  width: '100px',  marginLeft:'25px',  marginTop:'20px' }}
                            src="/static/img/favicon.svg"
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                        <Box sx={{ marginTop:'16px', marginLeft:'27px'}}>
                            <Pagemenu />
                        </Box>
                    </Box>
                    <Box sx={{marginTop:'20px'}}>
                        <Profile />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        bgcolor: 'background.flex',
                        boxShadow:'0px 10px 30px 0px rgb(82 63 105 / 8%)',
                        borderBlockStart:'solid 1px #EBEDF3',
                        p:2,
                        paddingLeft:'25px',
                        paddingRight:'25px',
                        backgroundColor:'#fff',
                        justifyContent: 'space-between'
                    }}
                >
                    <Breadcrumbs aria-label="breadcrumb" sx={{fontSize: "17px"}}>
                        <Link underline="hover" color="black" href="/" sx={{fontSize: "17px"}}>
                            Support
                        </Link>
                        <Typography color="text.primary" sx={{fontSize: "17px"}}>{props.title}</Typography>
                    </Breadcrumbs>
                </Box>
            </Stack>
        </div>
    );

}
export default Header;