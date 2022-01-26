import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "../../style/calendar.css";

import EventDialog from "./eventDialog";
import { useSelector, useDispatch } from 'react-redux';
import {
  addEvent,
  selectState
} from '../../actions/eventAction';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const eventsData = useSelector(selectState);
  const [eventData, setEventData] = useState({start:'', end:''});
  const [open, setOpen] = useState(false);
  const handleOpen = (events) => {
    setOpen(true);
    setEventData(f=>({ ...f, start: events.start}));
    setEventData(f=>({ ...f, end: events.end}))
  }
  const handleSelect = ({ start, end }) => {
    // const title = window.prompt("New Event name");
    // if (title)
    //   setEventsData([
    //     ...eventsData,
    //     {
    //       start,
    //       end,
    //       title
    //     }
    //   ]);
  };
  return (
    <div className="App">
      <Calendar
        views={["month", "week", "day"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleOpen}
      />
      <EventDialog open = {open} eventData = {eventData}  setOpen = {setOpen} />
    </div>
  );
}
