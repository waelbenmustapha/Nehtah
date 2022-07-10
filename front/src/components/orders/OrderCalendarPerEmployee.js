import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";

import "./OrderCalendarPerEmployee.css";
import arLocale from "@fullcalendar/core/locales/ar";
function OrderCalendarPerEmployee({ employee }) {
  function renderEventContent(eventInfo) {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          overflow: "hidden",
        }}
        onClick={() => console.log(eventInfo)}
      >
        <div className="textresp">{eventInfo.timeText}</div>
        <div
         className="textresp" style={{fontWeight:"bold",flexDirection:"row",display:"flex",justifyContent:"space-between"}}
        >
      <span >{JSON.parse(eventInfo.event.title).description}</span>
       <span style={{marginRight:"15px"}}>{JSON.parse(eventInfo.event.title).name}</span>
        </div>
        {!eventInfo.isFuture && !eventInfo.isPast && (
          <div
           className="greendot"
          ></div>
        )}
      </div>
    );
  }

  return (
    <div className="bigcontainer">
      <img alt="employee" src={employee.image} className="employeimgstyle" />
      <p className="emplname">{employee.firstname}</p>

      <div className="calenderdiv">
        <FullCalendar
          direction="rtl"
          locale={arLocale}
          nowIndicator={true}
          eventBackgroundColor="rgba(178,28,29,0.4)"
          eventTextColor="black"
          displayEventTime={true}
          dayHeaders={false}
          headerToolbar={{
            start: "", // will normally be on the left. if RTL, will be on the right
            center: "",
            end: "", // will normally be on the right. if RTL, will be on the left
          }}
          slotLabelInterval="00:30:00"
          height="100%"
          slotDuration={"00:30:00"}
          slotMinTime={"10:30:00"}
          slotMaxTime={"24:00:01"}
          eventContent={renderEventContent}
          expandRows={true}
          allDaySlot={false}
          plugins={[timeGridPlugin]}
          initialView="timeGridDay"
          events={employee.events}
        />
      </div>
    </div>
  );
}

export default OrderCalendarPerEmployee;
