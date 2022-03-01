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
  addEdpdq
} from '../../actions/edpdqAction';

export default function EdpdqDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.data);

  useEffect(()=>{
    setFormData(props.data)
  }, [props])
  const handleSave=()=>{
    var validRegex = /^[YN]/;
    if(formData.table_name === ""){
      toast.error("Table Name Required!");
    }else if(formData.rule_name === ""){
      toast.error("Rule Name Required!");
    }else if(formData.custom_query_check === ""){
      toast.error("custom_query_check Required!");
    }else if(!formData.custom_query_check.match(validRegex)) {
      toast.error("Only Y or N allowed");  
    }else{
      dispatch(addEdpdq(formData));
      props.setOpen(false);
    }
  }
  return (
    <div>
      <Dialog open={props.open} onClose={()=>{props.setOpen(false)}}>
        <DialogTitle>Add DQ Rule</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add DQ Rule details
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="table_name"
            label="TABLE NAME"
            type="text"
            fullWidth
            variant="standard"
            value={formData.table_name}
            onChange={evt => { setFormData(f => ({ ...f, table_name: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="rule_name"
            label="RULE NAME"
            type="text"
            fullWidth
            variant="standard"
            value={formData.rule_name}
            onChange={evt => { setFormData(f => ({ ...f, rule_name: evt.target.value})) }}
          />
          <TextField
            required
            margin="dense"
            id="custom_query_check"
            label="CUSTOM QUERY CHECK"
            type="text"
            fullWidth
            variant="standard"
            value={formData.custom_query_check}
            onChange={evt => { setFormData(f => ({ ...f, custom_query_check: evt.target.value})) }}
          />
            <TextField
            required
            margin="dense"
            id="description"
            label="DESCRIPTION"
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