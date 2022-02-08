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
import { addEvent } from '../../actions/eventAction';
import { selectContact } from '../../actions/contactAction';

export default function EventDialog(props) {

  const dispatch = useDispatch();

  useEffect(()=>{
    setFormData({...formData, 
      contact: props.eventData.contact,
      team:props.eventData.team, 
      start: props.eventData.start, 
      end: props.eventData.end,
      type: props.eventData.type,
      _id :props.eventData._id
    });  
  }, [props])

  const [formData, setFormData] = useState(props.eventData);
  const contacts = useSelector(selectContact);
  const [inputValue, setInputValue] = useState('');
  const handleSave=()=>{
    if(formData.title == ""){
      toast.error("Title Required!");
    }else if(formData.type == ""){
      toast.error("Type Required!");
    }else{
      dispatch(addEvent(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={props.open} onClose={()=> {props.setOpen(false)}}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You event. You can add the event title, team and duration
          </DialogContentText>
          <FormControl variant="standard" sx={{ m: 1,width: '100%'  }}>
            <Autocomplete
              value={formData.contact}
              inputValue={inputValue}
              getOptionLabel={(option) => option.name ? option.name : ""}
              disableClearable
              onChange={(event, newValue) => {
                setFormData(f => ({ ...f, contact: newValue._id}))
                // setInputValue(newValue.name);
              }}
              isOptionEqualToValue={(option, value) => option.id === value._id}
              onInputChange={(event, newInputValue) => {
                // console.log(newInputValue);
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={contacts}
              sx={{ width: '100%', marginTop:'15px' }}
              renderInput={(params) => <TextField {...params} label="Select Contact User" variant="standard"/>}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1,width: '100%'  }}>
            <InputLabel id="demo-simple-select-standard-label">Event Team</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formData.team}
              onChange={evt => { setFormData(f => ({ ...f, team: evt.target.value})) }}
              label="Team"
              variant="standard"
            >
              <MenuItem value={'Hermes'}>Hermes</MenuItem>
              <MenuItem value={'Zeus'}>Zeus</MenuItem>
              <MenuItem value={'Apollo'}>Apollo</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={1}>
              <FormControl variant="standard" sx={{ m: 1,width: '100%'  }}>
                <DateTimePicker
                  label="Start"
                  value={formData.start}
                  disabled
                  sx= {{width:'100%'}}
                  onChange={evt => { setFormData(f => ({ ...f, start: evt})) }}
                  renderInput={(params) => <TextField {...params} variant="standard"/>}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1,width: '100%'  }}>
                <DateTimePicker
                  label="end"
                  value={formData.end}
                  disabled
                  sx= {{width:'100%'}}
                  onChange={evt => { setFormData(f => ({ ...f, end: evt})) }}
                  renderInput={(params) => <TextField {...params} variant="standard"/>}
                />
              </FormControl>
            </Stack>
          </LocalizationProvider>
          <FormControl variant="standard" sx={{ m: 1,width: '100%'  }}>
            <InputLabel id="demo-simple-select-standard-label">Event Type</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formData.type}
              onChange={evt => { setFormData(f => ({ ...f, type: evt.target.value})) }}
              label="Type"
              variant="standard"
            >
              <MenuItem value={'Holiday'}>Holiday</MenuItem>
              <MenuItem value={'Vacation'}>Vacation</MenuItem>
              <MenuItem value={'Weekend'}>Weekend</MenuItem>
              <MenuItem value={'Travel'}>Travel</MenuItem>
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