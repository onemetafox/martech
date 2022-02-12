import { React, useEffect } from 'react';
import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, TextField, Dialog, 
  DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { toast, ToastContainer } from "react-toastify";

import {useDispatch } from 'react-redux';
import {
  addTicket
} from '../../actions/ticketAction';

export default function TicketDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.data);

  useEffect(()=>{
    setFormData(props.data)
  }, [props])
  const handleSave=()=>{
    if(formData.name === ""){
      toast.error("Name Required!");
    }else if(formData.priority === ""){
      toast.error("Priority Required!");
    }else if(!formData.year === "") {
      toast.error("Year Required!");
    }else if(formData.month === ""){
      toast.error("Month Required!");
    }else{
      dispatch(addTicket(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog fullWidth open={props.open} onClose={()=>{props.setOpen(false)}}>
        <DialogTitle>Add Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You ticket. You can add the ticket detail
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={evt => { setFormData(f => ({ ...f, name: evt.target.value})) }}
          />
          <FormControl variant="standard" sx={{width: '100%'  }}>
            <InputLabel id="type-standard-label">Priority</InputLabel>
            <Select
              required
              labelId="type-standard-label"
              id="type-standard"
              value={formData.priority}
              onChange={evt => { setFormData(f => ({ ...f, priority: evt.target.value})) }}
              label="Priority"
              variant="standard"
            >
              <MenuItem value={'Low'}>Low</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'High'}>Hight</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{display: 'flex', justifyContent: 'between'}}>
            <FormControl variant="standard" sx={{ width: '50%' }}>
              <TextField
                required
                margin="dense"
                id="year"
                label="Year"
                type="number"
                fullWidth
                variant="standard"
                value={formData.year}
                onChange={evt => { setFormData(f => ({ ...f, year: evt.target.value})) }}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: '50%' }}>
              <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={formData.month}
                onChange={evt => { setFormData(f => ({ ...f, month: evt.target.value})) }}
                label="Status"
                variant="standard"
              >
                <MenuItem value={'1'}>January</MenuItem>
                <MenuItem value={'2'}>February</MenuItem>
                <MenuItem value={'3'}>February</MenuItem>
                <MenuItem value={'4'}>April</MenuItem>
                <MenuItem value={'5'}>May</MenuItem>
                <MenuItem value={'6'}>June</MenuItem>
                <MenuItem value={'7'}>July</MenuItem>
                <MenuItem value={'8'}>August</MenuItem>
                <MenuItem value={'9'}>September</MenuItem>
                <MenuItem value={'10'}>October</MenuItem>
                <MenuItem value={'11'}>November</MenuItem>
                <MenuItem value={'12'}>December</MenuItem>

              </Select>
            </FormControl>
          </Box>
          
          <TextField
            required
            margin="dense"
            id="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
            value={formData.value}
            onChange={evt => { setFormData(f => ({ ...f, value: evt.target.value})) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={()=>{props.setOpen(false)}}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer autoClose={2000} />
    </div>
  );
}