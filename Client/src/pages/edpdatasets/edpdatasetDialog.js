import { React, useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { EditorState, convertFromRaw, convertToRaw  } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast, ToastContainer } from "react-toastify";
import {useDispatch } from 'react-redux';
import {
  addEdpdataset
} from '../../actions/edpdatasetAction';

export default function EdpdatasetDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.edpdatasetData);
  const [editorState, setEditorState] = useState();
  useEffect(()=>{
    // console.log(props);
    setFormData(props.edpdatasetData)
    if(props.edpdatasetData.description !== ""){
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.edpdatasetData.description))));
    }else{
      setEditorState(EditorState.createEmpty());
    }
    
  }, [props])
  const handleSave=()=>{
    if(formData.title === ""){
      toast.error("Title Required!");
    }else if(formData.description === ""){
      toast.error("Description Required!");
    }else{
      dispatch(addEdpdataset(formData));
      props.setOpen(false);
      props.setExpanded(true)
    }
  }
  const onEditContent=(data)=>{
    setEditorState(data);
    setFormData(f=>({...f, description: JSON.stringify(convertToRaw(data.getCurrentContent()))}))
  }
  
  return (
    <div>
      <Dialog fullWidth open={props.open} onClose={()=>{props.setOpen(false)}}>
        <DialogTitle>Add Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You Content details
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
            // value={formData.title}
            onChange={evt => { setFormData(f => ({ ...f, title: evt.target.value})) }}
          />
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
            onEditorStateChange={onEditContent}
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