import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Orders.css";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable

import arLocale from "@fullcalendar/core/locales/ar";
import AddOrderModal from "../../../components/orders/AddOrderModal";
import { getEmployees } from "../../../api/Employee";
function Orders() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee,setSelectedEmployee]=useState(null)

  //Function to fill epmployees list
  async function getcurrentEmployees() {
    setEmployees(await getEmployees());
    console.log(await getEmployees())
    
  }

  useEffect(() => {
    getcurrentEmployees();
  }, []);
  const [showAdd,setShowAdd]=useState(false);
  const [info,setInfo]=useState(null);
  return (
    <div
      className="blabla"
      style={{
        width: "70%",
        height: "100%",
        flex: 1,
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "15px",
        alignSelf: "center",
        margin: "0px auto",
      }}
    >
      <AddOrderModal getcurrentEmployees={getcurrentEmployees} selectedEmployee={employees[selectedEmployee]} info={info} showAdd={showAdd} setShowAdd={setShowAdd}/>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"10px"}}>{employees.map((el,index)=>(<img onClick={()=>setSelectedEmployee(index)} className="hoverscale" src={el.image} style={{height:"115px",width:"115px",borderRadius:"50%"}} />))}</div>
      {selectedEmployee==null?<h1 style={{textAlign:"center",padding:"100px"}}>الرجاء اختيار عامل</h1>:
      <FullCalendar
      contentHeight={'auto'}
        direction="rtl"
        locale={arLocale}
        selectable={true}
        nowIndicator={true}
        select={(info) =>{setShowAdd(true);
          setInfo(info);
         
        }
        }
        eventBackgroundColor="rgba(178,28,29,0.4)"
        eventTextColor="black"
        displayEventTime={true}
        dayHeaders={false}
        headerToolbar={{
          start: "", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "", // will normally be on the right. if RTL, will be on the left
        }}
        slotLabelInterval="00:15:00"
        height="100%"
        slotDuration={"00:15:00"}
        slotMinTime={"10:30:00"}
        slotMaxTime={"23:59:00"}
        eventContent={renderEventContent}
        expandRows={true}
        allDaySlot={false}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        events={selectedEmployee!==null?employees[selectedEmployee].events:[]}
      />}
    </div>
  );
}

export default Orders;

function renderEventContent(eventInfo) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
      }}
      onClick={() => console.log(eventInfo)}
    >
      <div>{eventInfo.timeText}</div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          textOverflow: "ellipsis",
        }}
      >
        {eventInfo.event.title}
      </div>
      {!eventInfo.isFuture && !eventInfo.isPast && (
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
          }}
        ></div>
      )}
    </div>
  );
}
