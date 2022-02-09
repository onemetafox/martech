import React from 'react';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {stateToHTML} from 'draft-js-export-html'; 
import { convertFromRaw } from 'draft-js';
import {getAll, delFaq, selectFaq} from '../../actions/faqAction';
import { 
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Slide 
} from '@mui/material';

import FaqDialog from './faqDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const convertCommentFromJSONToHTML = (text) => {
  return stateToHTML(convertFromRaw(JSON.parse(text))) 
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Faq = (props) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState(props.faqData);
  const [admin, setAdmin] = useState(props.isAdmin);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  useEffect(()=>{
    setFaq(props.faqData);
    setAdmin(props.isAdmin);
  },[props])
  return (
    <Card sx={{ width: "100%", marginTop: "15px"}}>
      <CardHeader
        title={faq.title}
      />
      <CardActions disableSpacing>
        
        <IconButton onClick = {(evt)=>setOpen(true)} aria-label="share">
          {admin?<EditIcon />:""}
        </IconButton>
        <IconButton onClick = {(evt)=>setDialogOpen(true)} aria-label="share">
          {admin?<DeleteIcon />:""}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: convertCommentFromJSONToHTML(faq.description) }} />
        </CardContent>
      </Collapse>
      <FaqDialog expanded = {expanded} setExpanded={setExpanded} open = {open} faqData = {faq}  setOpen = {setOpen}/>
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
              <Button  sx={{background: "#F64E60", color: "#ffff", marginRight:"20px",'&:hover': { background: "#F64E60",}}} onClick={()=>{dispatch(delFaq(faq._id)); setDialogOpen(false)}}>Agree</Button>
              <Button onClick={()=>{setDialogOpen(false)}}>Disagree</Button>
          </DialogActions>
      </Dialog>
    </Card>
    
  );
}
export default Faq;