import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../style/calendar.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EventDialog from "./eventDialog";
import { useSelector, useDispatch } from 'react-redux';
import {
  getAll,
  selectState
} from '../../actions/eventAction';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAll());
  }, [])
  const eventsData = useSelector(selectState);
  const [eventData, setEventData] = useState({start:'', end:''});
  const [open, setOpen] = useState(false);

  const eventList = eventsData.map(({start, end, ...rest}) =>
  ({
        start: new Date(Date.parse(start)),
        end: new Date(Date.parse(end)),
      ...rest
  }));

  const handleOpen = (events) => {
    setOpen(true);
    setEventData(f=>({ ...f, start: events.start}));
    setEventData(f=>({ ...f, end: events.end}))
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
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleOpen}
      />
      <EventDialog open = {open} eventData = {eventData}  setOpen = {setOpen} />
      <ToastContainer autoClose={2000} />
    </div>
  );
}
