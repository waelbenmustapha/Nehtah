import React, { useEffect, useState } from "react";
import { getEmployees } from "../../../api/Employee";
import OrderCalendarPerEmployee from "../../../components/orders/OrderCalendarPerEmployee";

function Dashboard() {

const [employees,setEmployees]=useState([]);

async function getEmployes(){
  setEmployees(await getEmployees());
  console.log(await getEmployees());
  }

useEffect(() => {
  getEmployes();

  const interval = setInterval(() => {
    getEmployes();

  }, 5000);

  return () => clearInterval(interval); // 
}, [])


  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      {employees.map((employee)=><OrderCalendarPerEmployee employee={employee} events={employee.events}/>
)}
    </div>
  );
}

export default Dashboard;

