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
  addFaq
} from '../../actions/faqAction';

export default function FaqDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.faqData);

  useEffect(()=>{
    setFormData(props.faqData)
  }, [props])
  const handleSave=()=>{
    if(formData.title == ""){
      toast.error("Title Required!");
    }else if(formData.description == ""){
      toast.error("Description Required!");
    }else{
      dispatch(addFaq(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={props.open} onClose={()=>{props.setOpen(false)}}>
        <DialogTitle>Add Faq</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You faq. You can add the faq detail
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Title Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.title}
            onChange={evt => { setFormData(f => ({ ...f, title: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={formData.description}
            onChange={evt => { setFormData(f => ({ ...f, description: evt.target.value})) }}
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