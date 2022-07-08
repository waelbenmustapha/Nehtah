import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Employees.css";
import plus from "../../../assets/plus.png";
import remove from "../../../assets/remove.png";
import edit from "../../../assets/edit.png";
import AddEmployeeModal from "../../../components/employees/modals/AddEmployeeModal";
import { getEmployees } from "../../../api/Employee";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
import DeleteEmployeeModal from "../../../components/employees/modals/DeleteEmployeeModal";
function Employees() {
  //Show or hide Add Modal
  const [show, setShow] = useState(false);

  //Show or hide Delete Modal
  const [showDelete, setShowDelete] = useState(false);

  //Selected Employee to Edit Delete
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  //Set if edit or add modal to be shown
  const [isEdit,setIsEdit]=useState(false);

  //Employees list to fill later with Get api
  const [employees, setEmployees] = useState([]);

  //set Employee id to delete
  //Function to fill epmployees list
  async function getcurrentEmployees() {
    setEmployees(await getEmployees());
  }

  useEffect(() => {
    getcurrentEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        isEdit,
        show,
        setShow,
        getcurrentEmployees,
        showDelete,
        setShowDelete,
        selectedEmployee,
        setSelectedEmployee,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <AddEmployeeModal />
        <DeleteEmployeeModal />
        <div className="ttp">
          <div className="centerimgandtext" onClick={() => {setShow(true);setIsEdit(false)}}>
            <img
              alt="plus icon to add employee"
              src={plus}
              style={{ height: "28px", width: "28px" }}
            />{" "}
            أضف عامل{" "}
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
                <tr key={el.id}>
                  <td className="cell">
                    <img
                      alt="Delete employee modal"
                      onClick={() => {
                        setSelectedEmployee(el);
                        setShowDelete(true);
                      }}
                      src={remove}
                      className="iconfiltercolor"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </td>
                  <td className="cell">
                    <img
                    onClick={()=>{
                      setSelectedEmployee(el);
                      setIsEdit(true);
                      setShow(true);
                    }}
                      alt="Edit employee modal"
                      src={edit}
                      className="iconfiltercolor"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </td>
                  <td className="cell">
                    <img
                      alt="employee"
                      src={el.image}
                      style={{ height: "75px", width: "75px" }}
                    />
                  </td>
                  <td className="cell">{el.phonenumber}</td>
                  <td className="cell">{el.lastname}</td>
                  <td className="cell">{el.firstname}</td>
                  <td className="cell">{el.id}</td>
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
