import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from '@mui/styles';
import { createMuiTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { 
    Box, 
    IconButton,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Slide 
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

import ContactDialog from './contactDialog';

import { contactStructure } from '../../config/const';

import {getAll, delContact, selectState} from '../../actions/contactAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll());
    }, [])
    const contactsList = useSelector(selectState);
    const [open, setOpen] = useState(false);
    const [contactData, setContactData] = useState(contactStructure);
    const [dialogOpen, setDialogOpen] = useState(false);
    const editContactData=(value)=>{
        var data = value.rowData;
        setContactData({...contactData, 
            _id: data[0],
            name: data[1],
            ntid: data[2],
            email: data[3],
            phone: data[4],
            timezone: data[5],
            location: data[6]
        })
        setOpen(true)
    }
    const deleteContact =(value) =>{
        var data = value.rowData;
        setContactData({...contactData, 
            _id: data[0],
            name: data[1],
            ntid: data[2],
            email: data[3],
            phone: data[4],
            timezone: data[5],
            location: data[6]
        })
        setDialogOpen(true);
    }
    const contactColumn = [
        { 
            name: '_id',
            options: {
                filter: false,
                display: false,
                viewColumns: false,
                sort: false
            }
        },{ 
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
            name: 'phone',
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
                            <IconButton onClick = {()=>{editContactData(tableMeta); setOpen(true)}} color="primary"><BorderColorSharpIcon/></IconButton>
                            <IconButton onClick = {()=>{deleteContact(tableMeta)}} color="primary"><DeleteIcon/></IconButton>
                        </Box>
                    );
                },
                filter: false
            },
           
            
        },
    ];
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
                        data={contactsList}
                        columns={contactColumn}
                        options={options}
                        title={"Team Contact"}
                    />
                </ThemeProvider>
            </Box>
            <ContactDialog open={open} setOpen={setOpen} data = {contactData}/>
            <Dialog
                open={dialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=> {setDialogOpen(false)}}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Confirm Dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you want to delete it? Once you delete it, you can't recovery again
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button  sx={{background: "#F64E60", color: "#ffff", marginRight:"20px",'&:hover': { background: "#F64E60",}}} onClick={()=>{dispatch(delContact(contactData._id)); setDialogOpen(false)}}>Agree</Button>
                    <Button onClick={()=>{setDialogOpen(false)}}>Disagree</Button>
                    
                </DialogActions>
            </Dialog>
        </Container>
    );
}
export default Content;
