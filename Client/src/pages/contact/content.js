import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import MuiDataTable from "react-mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { 
    Box, 
    IconButton,
    Button
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

import { contactColumn } from '../../config/const';


function createData(name, ntid, email, phonenumber, timezone, location) {
    return { name, ntid, email, phonenumber, timezone, location };
}
// const editContact =(e) =>{
//     console.log("parent td#id: ",e.target.parentNode);
// }
// const delContact =(e) =>{
//     console.log("parent td#id: ",e.target.parentNode);
// }
const rows = [
    createData('Pizza', '0000-00-00', 'pizza@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
    createData('Sandwitch', '1236-05-00', 'sandwitch@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
    createData('Toast', '1234-00-00', 'toast@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),

];
const getMuiTheme = () =>
        createTheme({
            overrides: {
                MUIDataTable: {
                    root: {
                        backgroundColor: 'red',
                    },
                    paper: {
                        boxShadow: 'none',
                    },
                },
                MuiTableCell: {
                    head: {
                        backgroundColor: "red !important"
                    }
                }
            },
        }
    );
// const action = (data) =>{
//     console.log(data)
//     return (
//         <Box sx={{display:'flex', justifyContent:'center'}}>
//             <IconButton color="primary"><DeleteIcon/></IconButton>
//             <IconButton color="primary"><BorderColorSharpIcon/></IconButton>
//         </Box>
//     );
// }
    
// const action = (
//     <Box sx={{display:'flex', justifyContent:'center'}}>
//         <IconButton onClick = {editContact} color="primary"><DeleteIcon/></IconButton>
//         <IconButton onClick = {delContact} color="primary"><BorderColorSharpIcon/></IconButton>
//     </Box>
// );
const Content = () =>{
    const options = {
        hasIndex: true /* <-- use numbers for rows*/,
        // customAction: action /* <-- use action button for row */,
        searchBox: true /* <-- search true or false */,
        indexColumn:
          "fname" /* <-- add your data first unique column name for this like _id, i used fname because i don't have a _id field in my array */,
        // customToolbar: () => {
        //     return (
        //         <Button>
        //             Add Contact
        //         </Button>
        //         // <IconButton style={{ order: -1 }}>
        //         //   <AddIcon />
        //         // </IconButton>
        //     );
        //   },
      };
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px',marginBottom:'30px', padding:'20px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <ThemeProvider theme={getMuiTheme()}>
                    <MuiDataTable sx={{bgcolor: '#fff'}}
                        data={rows}
                        columns={contactColumn}
                        options={options}
                        title={"Team Contact"}
                    />
                </ThemeProvider>
            </Box>
        </Container>
    );
}
export default Content;
