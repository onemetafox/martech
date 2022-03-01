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

import EdpdqDialog from './edpdqDialog';

import { edpdqStructure } from '../../config/const';

import {getAll, delEdpdq, selectEdpdq} from '../../actions/edpdqAction';

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

const Content = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll());
    }, [])
    const edpdqList = useSelector(selectEdpdq);
    const [open, setOpen] = useState(false);
    const [edpdqData, setEdpdqData] = useState(edpdqStructure);
    const [dialogOpen, setDialogOpen] = useState(false);
    const editEdpdqData=(value)=>{
        var data = value.rowData;
        setEdpdqData({...edpdqData, 
            _id: data[0],
            table_name: data[1],
            rule_name: data[2],
            custom_query_check: data[3],
            description: data[4]
        })
        setOpen(true)
    }
    const deleteEdpdq =(value) =>{
        var data = value.rowData;
        setEdpdqData({...edpdqData, 
            _id: data[0],
            table_name: data[1],
            rule_name: data[2],
            custom_query_check: data[3],
            description: data[4]
        })
        setDialogOpen(true);
    }
    const edpdqColumn = [
        { 
            name: '_id',
            options: {
                filter: false,
                display: false,
                viewColumns: false,
                sort: false
            }
        },{ 
            name: 'table_name',
            label: 'TABLE_NAME',
            align: 'center',},
        { 
            name: 'rule_name',
            label: 'RULE_NAME',
            align: 'center',},
        {
            name: 'custom_query_check',
            label: 'CUSTOM_QUERY_CHECK',
            align: 'center',
        },
        {
            name: 'description',
            label: 'DESCRIPTION',
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
                            <IconButton onClick = {()=>{editEdpdqData(tableMeta); setOpen(true)}} color="primary"><BorderColorSharpIcon/></IconButton>
                            <IconButton onClick = {()=>{deleteEdpdq(tableMeta)}} color="primary"><DeleteIcon/></IconButton>
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
                <ColorButton onClick={()=>{setEdpdqData(edpdqStructure); setOpen(true)}}>
                    Add Rule
                </ColorButton>
            );
        },
      };
    return(
        <Container maxWidth="lg" sx={{padding: "0px !important"}}>
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px',marginBottom:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <ThemeProvider theme={theme}>
                    <MUIDataTable sx={{bgcolor: '#fff'}}
                        data={edpdqList}
                        columns={edpdqColumn}
                        options={options}
                        title={"EDP DQ Rules"}
                    />
                </ThemeProvider>
            </Box>
            <EdpdqDialog open={open} setOpen={setOpen} data = {edpdqData}/>
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
                    <Button  sx={{background: "#F64E60", color: "#ffff", marginRight:"20px",'&:hover': { background: "#F64E60",}}} onClick={()=>{dispatch(delEdpdq(edpdqData._id)); setDialogOpen(false)}}>Agree</Button>
                    <Button onClick={()=>{setDialogOpen(false)}}>Disagree</Button>
                    
                </DialogActions>
            </Dialog>
        </Container>
    );
}
export default Content;
