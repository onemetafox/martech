import React from 'react';
import { Button, Breadcrumbs, Link, Typography,} from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Pagemenu from './menu';
import Profile from './profile';

const header = (props) =>{
    var fontsize = {
        fontSize : '17px'
    };
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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: '27px',
                                width: '100px',
                                marginLeft:'25px',
                                marginTop:'20px'
                            }}
                            src="/static/img/favicon.svg"
                        />
                        <Box
                            sx={{
                                marginTop:'16px',
                                marginLeft:'27px'
                            }}
                        >
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
                    <Breadcrumbs aria-label="breadcrumb" style={fontsize}>
                        <Link underline="hover" color="black" href="/" style={fontsize}>
                            Support
                        </Link>
                        <Typography color="text.primary" style={fontsize}>{props.title}</Typography>
                    </Breadcrumbs>
                </Box>
            </Stack>
        </div>
    );

}
export default header;