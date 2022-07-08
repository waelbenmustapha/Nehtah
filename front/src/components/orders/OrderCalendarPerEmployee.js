import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";

import "./OrderCalendarPerEmployee.css";
import arLocale from '@fullcalendar/core/locales/ar';
function OrderCalendarPerEmployee({ employee }) {
  return (
    <div className="bigcontainer">
      <img
      alt="employee"
        src={employee.image}
        className="employeimgstyle"
      /><p style={{textAlign:"center",padding:"5px",fontSize:"20px"}}>{employee.firstname}</p>

      <div className="calenderdiv">
        <FullCalendar
              contentHeight={'auto'}

        direction="rtl"
        locale={arLocale}
    selectable={true}
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

function renderEventContent(eventInfo) {

  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",overflow:"hidden"}} onClick={()=>console.log(eventInfo)}>
      <div>{eventInfo.timeText}</div>
      <div style={{fontSize:"16px",fontWeight:"500",textOverflow:"ellipsis"}}>{eventInfo.event.title}</div>{(!eventInfo.isFuture&&!eventInfo.isPast)&&<div style={{backgroundColor:"green",borderRadius:"50%",width:"15px",height:"15px"}}></div>}   
    </div>
  );
}
