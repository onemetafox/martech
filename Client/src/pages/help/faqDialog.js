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
  addFaq
} from '../../actions/faqAction';

export default function FaqDialog(props) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(props.faqData);
  const [editorState, setEditorState] = useState();
  useEffect(()=>{
    setFormData(props.faqData)
    if(props.faqData.description !== ""){
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.faqData.description))));
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
      dispatch(addFaq(formData));
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
              // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
            }}
            onEditorStateChange={onEditContent}
          />
          {/* <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            id="description"
            minRows={5}
            style={{ width: '100%' }}
            variant="standard"
            onChange={evt => { setFormData(f => ({ ...f, description: evt.target.value})) }}
            value={formData.description}
          /> */}
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