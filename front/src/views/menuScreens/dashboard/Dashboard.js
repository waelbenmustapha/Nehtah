import React, { useEffect, useState } from "react";
import { getEmployees } from "../../../api/Employee";
import OrderCalendarPerEmployee from "../../../components/orders/OrderCalendarPerEmployee";
import { useAuth } from "../../../contexts/AuthContext";
import "./Dashboard.css";
function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const auth = useAuth();
  async function getEmployes() {
    await getEmployees()
      .then((res) => {
        setEmployees(res);
        auth.setLoading(false);
      })
      .catch((err) => {
        alert("حدث خطأ");
        auth.setLoading(false);
      });
  }

  useEffect(() => {
    auth.setLoading(true);

    getEmployes();

    const interval = setInterval(() => {
      getEmployes();
    }, 5000);

    return () => clearInterval(interval); //
  }, []);

  return (
    <div className="eachepmordersdiv">
      {employees.map((employee) => (
        <OrderCalendarPerEmployee
          employee={employee}
          events={employee.events}
        />
      ))}
    </div>
  );
}

export default Dashboard;
