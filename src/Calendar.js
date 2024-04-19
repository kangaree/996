import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./996Rule";

const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map((k) => Views[k]);

const CalendarComponent = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={allViews}
        defaultView="week"
        defaultDate={new Date()}
        selectable={false}
        titleAccessor="title"
        eventPropGetter={() => ({
          style: {
            backgroundColor: "lightblue",
            color: "black",
          },
        })}
      />
    </div>
  );
};

export default CalendarComponent;
