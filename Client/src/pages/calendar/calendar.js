import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "../../style/calendar.css";

import EventDialog from "./eventDialog";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);
  const [open, setOpen] = useState(false);
  const handleOpen = (events) => {
    console.log(events.start);
    console.log(events.end);
    setOpen(true);
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
      <EventDialog open = {open} setOpen = {setOpen} />
    </div>
  );
}
