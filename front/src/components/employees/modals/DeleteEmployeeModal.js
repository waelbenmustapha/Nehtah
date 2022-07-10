import React, { useContext } from 'react'
import { EmployeeContext } from '../../../contexts/EmployeeContext'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { DeleteEmployee } from '../../../api/Employee';
import { useAuth } from '../../../contexts/AuthContext';

function DeleteEmployeeModal() {
  const {showDelete,setShowDelete,selectedEmployee,setSelectedEmployee,getcurrentEmployees} = useContext(EmployeeContext)
const auth = useAuth();
  const handleOpenClose = () =>{
    setShowDelete(!showDelete)
    setSelectedEmployee(null)
  }
  const confirmDelete=()=>{
    auth.setLoading(true)
    DeleteEmployee(selectedEmployee.id).then(()=> {handleOpenClose();getcurrentEmployees();setSelectedEmployee(null);auth.setLoading(false)
    }).catch((err)=>{alert("حدث خطأ اثناء حذف العامل"+err);auth.setLoading(false)
  })
   
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