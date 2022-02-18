import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
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

import TicketDialog from './ticketDialog';

import { ticketStructure } from '../../config/const';

import {getAll, delTicket, selectTicket} from '../../actions/ticketAction';

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

const theme = createTheme({
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

const TicketTable = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll());
    }, [])
    const ticketsList = useSelector(selectTicket);
    const [open, setOpen] = useState(false);
    const [ticketData, setTicketData] = useState(ticketStructure);
    const [dialogOpen, setDialogOpen] = useState(false);
    const editTicketData=(value)=>{
        var data = value.rowData;
        setTicketData({...ticketData, 
            _id: data[0],
            name: data[1],
            priority: data[2],
            year: data[3],
            month: data[4],
            value: data[5]
        })
        setOpen(true)
    }
    const deleteTicket =(value) =>{
        var data = value.rowData;
        setTicketData({...ticketData, 
            _id: data[0],
            name: data[1],
            priority: data[2],
            year: data[3],
            month: data[4],
            value: data[5]
        })
        setDialogOpen(true);
    }
    const ticketColumn = [
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
            name: 'priority',
            label: 'Priority',
            align: 'center',},
        {
            name: 'year',
            label: 'Year',
            align: 'center',
        },
        {
            name: 'month',
            label: 'Month',
            align: 'center',
        },
        {
            name: 'value',
            label: 'Value',
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
                            <IconButton onClick = {()=>{editTicketData(tableMeta); setOpen(true)}} color="primary"><BorderColorSharpIcon/></IconButton>
                            <IconButton onClick = {()=>{deleteTicket(tableMeta)}} color="primary"><DeleteIcon/></IconButton>
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
                <ColorButton onClick={()=>{setTicketData(ticketStructure); setOpen(true)}}>
                    Add Ticket
                </ColorButton>
            );
        },
      };
    return(
        <Container maxWidth="lg" sx={{padding: "0px !important"}}>
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <ThemeProvider theme={theme}>
                    <MUIDataTable sx={{bgcolor: '#fff'}}
                        data={ticketsList}
                        columns={ticketColumn}
                        options={options}
                        title={"Tickets by Catagory"}
                    />
                </ThemeProvider>
            </Box>
            <TicketDialog open={open} setOpen={setOpen} data = {ticketData}/>
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
                    <Button  sx={{background: "#F64E60", color: "#ffff", marginRight:"20px",'&:hover': { background: "#F64E60",}}} onClick={()=>{dispatch(delTicket(ticketData._id, ticketData.year)); setDialogOpen(false)}}>Agree</Button>
                    <Button onClick={()=>{setDialogOpen(false)}}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
export default TicketTable;
