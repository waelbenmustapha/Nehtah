import React, { useContext } from 'react'
import { EmployeeContext } from '../../../contexts/EmployeeContext'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { DeleteEmployee } from '../../../api/Employee';

function DeleteEmployeeModal() {
  const {showDelete,setShowDelete,selectedEmployee,setSelectedEmployee,getcurrentEmployees} = useContext(EmployeeContext)

  const handleOpenClose = () =>{
    setShowDelete(!showDelete)
  }
  const confirmDelete=()=>{
    DeleteEmployee(selectedEmployee.id).then(()=> {handleOpenClose();getcurrentEmployees();setSelectedEmployee(null)}).catch((err)=>alert("an error occured while deleting user "+err))
   
  }

  return (
    <Modal show={showDelete} onHide={handleOpenClose}>
    <Modal.Header  closeButton>
      <Modal.Title>{selectedEmployee&&`  ${selectedEmployee.firstname} \u202Aهل انت متأكد انك تريد حذف`}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleOpenClose}>
        الغاء
      </Button>
      <Button variant="danger" onClick={confirmDelete}>
       حذف
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteEmployeeModal