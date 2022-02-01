import { React, useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';

import Autocomplete from '@mui/material/Autocomplete';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import Stack from '@mui/material/Stack';

import { toast, ToastContainer } from "react-toastify";

import { useSelector, useDispatch } from 'react-redux';

import { addCall } from '../../actions/callAction';
import { selectContact } from '../../actions/contactAction';

export default function CallDialog(props) {

  const dispatch = useDispatch();

  useEffect(()=>{
    // dispatch(getAll());
    // setContactData(useSelector('selectState'));
    setFormData({...formData, 
      description:props.callData.description, 
      start: props.callData.start, 
      end: props.callData.end,
      type: props.callData.type,
      type: props.callData.status,
      _id :props.callData._id
    });  
  }, [props])
  const contacts = useSelector(selectContact);
  const [formData, setFormData] = useState(props.callData);
  const handleSave=()=>{
    if(formData.title == ""){
      toast.error("Title Required!");
    }else if(formData.type == ""){
      toast.error("Type Required!");
    }else{
      dispatch(addCall(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={props.open} onClose={()=> {props.setOpen(false)}}>
        <DialogTitle>Add Call</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You call. You can add the call user, description and duration
          </DialogContentText>
          <Autocomplete
            value={formData.contact}
            onChange={(event, newValue) => {
              console.log(newValue);
              // setFormData(f => ({ ...f, contact: newValue}))
            }}
            inputValue={formData.contact}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              // setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={contacts}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Controllable" />}
          />
          <TextField
            required
            margin="dense"
            id="description"
            label="Call Description"
            type="text"
            fullWidth
            variant="standard"
            value={formData.description}
            onChange={evt => { setFormData(f => ({ ...f, description: evt.target.value})) }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  label="Start"
                  value={formData.start}
                  disabled
                  onChange={evt => { setFormData(f => ({ ...f, start: evt})) }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DateTimePicker
                  label="end"
                  value={formData.end}
                  disabled
                  onChange={evt => { setFormData(f => ({ ...f, end: evt})) }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Call Type</InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={formData.type}
                onChange={evt => { setFormData(f => ({ ...f, type: evt.target.value})) }}
                label="Type"
              >
                <MenuItem value={'on-site'}>On Site</MenuItem>
                <MenuItem value={'off-shore'}>Off Shore</MenuItem>
              </Select>

              <InputLabel id="demo-simple-select-standard-label">Call Status</InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={formData.status}
                onChange={evt => { setFormData(f => ({ ...f, type: evt.target.value})) }}
                label="Type"
              >
                <MenuItem value={'primary'}>Primary</MenuItem>
                <MenuItem value={'secondary'}>Secondary</MenuItem>
              </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={()=> {props.setOpen(false)}}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer autoClose={2000} />
    </div>
  );
}