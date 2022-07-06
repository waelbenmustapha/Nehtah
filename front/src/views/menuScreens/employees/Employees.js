import React, {  useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Employees.css";
import plus from "../../../assets/plus.png";
import remove from "../../../assets/remove.png";
import edit from "../../../assets/edit.png";
import AddEmployeeModal from "../../../components/employees/modals/AddEmployeeModal";
import { getEmployees } from "../../../api/Employee";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
function Employees() {

  //Show or hide Add Modal
  const [show, setShow] = useState(false);

  //Show or hide Delete Modal
  const [showDelete,setShowDelete]=useState(false)

  //Employees list to fill later with Get api
  const [employees, setEmployees] = useState([]);

  //Function to fill epmployees list
  async function getcurrentEmployees() {
    setEmployees(await getEmployees());
  }

  useEffect(() => {
    getcurrentEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{show,setShow,getcurrentEmployees,showDelete,setShowDelete}}>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <AddEmployeeModal/>
      <div className="ttp">
        <div className="centerimgandtext" onClick={() => setShow(true)}>
          <img src={plus} style={{ height: "28px", width: "28px" }} /> أضف عامل{" "}
        </div>
        <div style={{ textAlign: "right" }}>قائمة العمال</div>
      </div>
      <div className="tableandplus">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="cell">حذف</th>
              <th className="cell">تعديل</th>
              <th className="cell">الصورة</th>
              <th className="cell">رقم الهاتف</th>
              <th className="cell">اللقب</th>
              <th className="cell">الاسم</th>
              <th className="cell">#</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((el) => (
              <tr>
                <div class="cell">
                  <img
                    src={remove}
                    className="iconfiltercolor"
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div class="cell">
                  <img
                    src={edit}
                    className="iconfiltercolor"
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div class="cell">
                  <img
                    src={el.image}
                    style={{ height: "75px", width: "75px" }}
                  />
                </div>
                <div class="cell">{el.phonenumber}</div>
                <div class="cell">{el.lastname}</div>
                <div class="cell">{el.firstname}</div>
                <div class="cell">{el.id}</div>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </EmployeeContext.Provider>
  );
}

export default Employees;
