import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Calendar, momentLocalizer } from "react-big-calendar";
import { ToastContainer } from "react-toastify";

import moment from "moment";


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import EventDialog from "./eventDialog";

import "../../style/calendar.css";
import "react-toastify/dist/ReactToastify.css";

import {
  getAll,
  delEvent,
  selectState
} from '../../actions/eventAction';
import { Button } from "@mui/material";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const eventStructure = {
  title: '',
  description: '',
  start: '',
  end: '',
  type: '',
  _id: ''
}
export default function ReactBigCalendar() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAll());
  }, [])
  const eventsData = useSelector(selectState);
  const [eventData, setEventData] = useState(eventStructure);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const eventList = eventsData.map(({start, end, ...rest}) =>
  ({
        start: new Date(Date.parse(start)),
        end: new Date(Date.parse(end)),
      ...rest
  }));
  const eventStyleGetter = (event, start, end, isSelected) => {
    var backgroundColor;
    if (event.type == "Holiday"){
      backgroundColor= '#F64E60';
    }else if(event.type == "Vacation"){
      backgroundColor= '#3699FF';
    }else if(event.type == "Weekend"){
      backgroundColor= '#FFA800';
    }else{
      backgroundColor= '#1BC5BD';
    }
    
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };

  }
  const handleOpen = (events) => {
    setEventData(eventStructure);
    setEventData(f=>({ ...f, start: events.start}));
    setEventData(f=>({ ...f, end: events.end}))
    setOpen(true);
  }
  const showEvent = (event) => {
    setEventData(event);
    setModalOpen(true);
  }
  const handleClose = () => {
    setModalOpen(false);
  }
  const deleteEvent=()=>{
    dispatch(delEvent(eventData._id));
    setModalOpen(false);
  }
  const editEvent = () =>{
    setOpen(true);
    setModalOpen(false);
  }
  return (
    <div className="App">
      <Calendar
        views={["month", "week", "day"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventList}
        style={{ height: "100vh" }}
        onSelectEvent={showEvent}
        onSelectSlot={handleOpen}
        eventPropGetter={eventStyleGetter}
      />
      <EventDialog open = {open} eventData = {eventData}  setOpen = {setOpen} />
      <ToastContainer autoClose={2000} />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {eventData.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description : {eventData.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duration : {new Date(Date.parse(eventData.start)).toDateString()} ~ {new Date(Date.parse(eventData.end)).toDateString()}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Event Type : {eventData.type}
          </Typography>
          <Box sx= {{display: "flex", justifyContent: "right", marginTop: "15px", color: "#ffff",  paddingTop: "15px", borderTop: "solid 1px #dddd"}}>
            <Button onClick={editEvent} sx={{background: "#3699FF", color: "#ffff", marginRight:"20px",'&:hover': { background: "#3699FF",}}}>Edit</Button>
            <Button onClick={deleteEvent} sx={{background: "#F64E60", color: "#ffff", marginRight:"20px",'&:hover': { background: "#F64E60",}}}>Delete</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
