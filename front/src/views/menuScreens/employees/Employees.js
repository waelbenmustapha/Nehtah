import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./Employees.css";
import plus from "../../../assets/plus.png";
import AddEmployeeModal from "../../../components/employees/AddEmployeeModal";
function Employees() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <AddEmployeeModal show={show} setShow={setShow}/>
      <div
        className="ttp"
      >
        <div
       className="centerimgandtext" 
       onClick={()=>setShow(true)}
        >
          <img src={plus} style={{ height: "28px", width: "28px" }} /> أضف عامل{" "}
        </div>
        <div style={{ textAlign: "right" }}>قائمة العمال</div>
      </div>

      <div className="tableandplus">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>الصورة</th>
              <th>رقم الهاتف</th>
              <th>اللقب</th>
              <th>الاسم</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Employees;
