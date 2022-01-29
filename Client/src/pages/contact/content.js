import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from '@mui/styles';
import { createMuiTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { 
    Box, 
    IconButton,
    Button
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

import ContactDialog from './contactDialog';

import { contactStructure } from '../../config/const';

// import '../../style/App.css';

function createData(name, ntid, email, phonenumber, timezone, location) {
    return { name, ntid, email, phonenumber, timezone, location };
}
const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#E1F0FF',
    fontSize: '11px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginLeft: '15px',
    color:'#3699FF',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#3699FF',
    },
    boxShadow: 'none'
}));
const editContact =(value) =>{
    console.log(value);
}
const delContact =(value) =>{
    console.log(value);
}
export const contactColumn = [
    { 
        name: 'name',
        label: 'NAME',
        align: 'center',},
    { 
        name: 'ntid',
        label: 'NTID',
        align: 'center',},
    {
        name: 'email',
        label: 'EMAIL',
        align: 'center',
    },
    {
        name: 'phonenumber',
        label: 'PHONE NUMBER',
        align: 'center',
    },
    {
        name: 'timezone',
        label: 'TIME ZONE',
        align: 'center',
    },
    {
        name: 'location',
        label: 'LOCATION',
        align: 'center',
    },
    {
        name: 'action',
        label: 'ACTION',
        align: 'center',
        options: {
            customBodyRender: (value, tableMeta, updateValue)  => {
                return (
                    <Box sx={{display:'flex', justifyContent:'left'}}>
                        <IconButton onClick = {()=>{editContact(tableMeta)}} color="primary"><DeleteIcon/></IconButton>
                        <IconButton onClick = {()=>{delContact(tableMeta)}} color="primary"><BorderColorSharpIcon/></IconButton>
                    </Box>
                );
            },
            filter: false
        },
       
        
    },
];
const rows = [
    createData('Pizza', '0000-00-00', 'pizza@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
    createData('Sandwitch', '1236-05-00', 'sandwitch@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
    createData('Toast', '1234-00-00', 'toast@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),

];

const theme = createMuiTheme({
    Overrides: {
        MUIDataTable: {
            root: {
                border: [[1, 'solid', 'red']],
            },
            paddingLeft: '15px !important'
        },
        MuiTableCell: {
            root: {
            borderColor: '#d3d3d3',
            },
            head: {
            background: 'lightgrey',
            '&:not(:last-child)': {
                borderRight: [[1, 'solid', '#c0c0c0']],
            },
            },
        },
        MuiTableSortLabel: {
            root: {
            alignItems: 'flex-start',
            },
        },
        MuiTableFooter: {
            root: {
            background: 'lightgrey',
            },
        },
    
        // MUIDataTable
        MUIDataTableHeadCell: {
            sortLabelRoot: {
            // height: undefined,
            },
        },
        },
});

const Content = () =>{
    const [open, setOpen] = useState(false);
    const [contactData, setContactData] = useState(contactStructure);
    const options = {
        // responsive: '',
        fixedHeader: false,
        filterType: 'textField',
        selectableRows: 'none',
        elevation: 0,
        print: false,
        download:false,
        customToolbar: () => {
            return (
                <ColorButton onClick={()=>{setOpen(true)}}>
                    Add Contact
                </ColorButton>
            );
        },
      };
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px',marginBottom:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <ThemeProvider theme={theme}>
                    <MUIDataTable sx={{bgcolor: '#fff'}}
                        data={rows}
                        columns={contactColumn}
                        options={options}
                        title={"Team Contact"}
                    />
                </ThemeProvider>
            </Box>
            <ContactDialog open={open} setOpen={setOpen} data = {contactData}/>
        </Container>
    );
}
export default Content;
