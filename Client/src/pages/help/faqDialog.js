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
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {useDispatch } from 'react-redux';
import {
  addFaq
} from '../../actions/faqAction';

export default function FaqDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.faqData);
  const [expand, setExpanded] = useState(props.expanded)
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
      props.setExpanded(true)
    }
  }
  return (
    <div>
      <Dialog fullWidth open={props.open} onClose={()=>{props.setOpen(false)}}>
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
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={formData.title}
            onChange={evt => { setFormData(f => ({ ...f, title: evt.target.value})) }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            id="description"
            minRows={5}
            style={{ width: '100%' }}
            variant="standard"
            onChange={evt => { setFormData(f => ({ ...f, description: evt.target.value})) }}
            value={formData.description}
          />
          {/* <TextField
            required
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={formData.description}
            onChange={evt => { setFormData(f => ({ ...f, description: evt.target.value})) }}
          /> */}
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