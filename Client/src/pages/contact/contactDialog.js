import { React, useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toast, ToastContainer } from "react-toastify";

import {useDispatch } from 'react-redux';
import {
  addContact
} from '../../actions/contactAction';

export default function ContactDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.data);


  const handleSave=()=>{
    if(formData.title == ""){
      toast.error("Title Required!");
    }else if(formData.type == ""){
      toast.error("Type Required!");
    }else{
      dispatch(addContact(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={props.open} onClose={()=>{props.setOpen(false)}}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You contact. You can add the contact detail
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={evt => { setFormData(f => ({ ...f, name: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={formData.email}
            onChange={evt => { setFormData(f => ({ ...f, email: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="ntid"
            label="NTID"
            type="text"
            fullWidth
            variant="standard"
            value={formData.ntid}
            onChange={evt => { setFormData(f => ({ ...f, ntid: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="phone"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            value={formData.phone}
            onChange={evt => { setFormData(f => ({ ...f, phone: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="timezone"
            label="Time Zone"
            type="text"
            fullWidth
            variant="standard"
            value={formData.timezone}
            onChange={evt => { setFormData(f => ({ ...f, timezone: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="localhost"
            label="Location"
            type="location"
            fullWidth
            variant="standard"
            value={formData.locatopm}
            onChange={evt => { setFormData(f => ({ ...f, location: evt.target.value})) }}
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