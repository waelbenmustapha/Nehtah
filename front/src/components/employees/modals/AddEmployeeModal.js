//imports
import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addEmployeeApi, getEmployees } from "../../../api/Employee";
import ImageUpload from "../../../utils/ImageUpload";
import { EmployeeContext } from "../../../contexts/EmployeeContext";

//Begin

function AddEmployeeModal() {
  //Getting context state
  const { show, setShow, getcurrentEmployees } = useContext(EmployeeContext);

  //Show Hide Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Employee initial empty object structure
  const [employeedata, SetEmployeedata] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });
  const [image, setImage] = useState("");

  //Api to save employee and check inputs
  const handlesaveemployee = async () => {
    if (
      employeedata.firstname.length == 0 ||
      employeedata.lastname.length == 0 ||
      employeedata.phonenumber.length === 0 ||
      image.length === 0
    ) {
      alert("الرجاء التأكد من المعلومات");
    } else {
      await addEmployeeApi({ ...employeedata, image }).then(() => {
        getcurrentEmployees();
        setShow(false);
        SetEmployeedata({
          firstname: "",
          lastname: "",
          phonenumber: "",
        });
        setImage("");
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة عامل</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group dir="rtl" className="mb-3" controlId="formBasicEmail">
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                value={employeedata.firstname}
                onChange={(e) =>
                  SetEmployeedata((prevState) => ({
                    ...prevState,
                    firstname: e.target.value,
                  }))
                }
                type="text"
                required
                placeholder="أدخل الاسم"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group dir="rtl" className="mb-3" controlId="formBasicEmail">
              <Form.Label>اللقب</Form.Label>
              <Form.Control
                value={employeedata.lastname}
                onChange={(e) =>
                  SetEmployeedata((prevState) => ({
                    ...prevState,
                    lastname: e.target.value,
                  }))
                }
                type="text"
                required
                placeholder="أدخل اللقب"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group dir="rtl" className="mb-3" controlId="formBasicEmail">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                value={employeedata.phonenumber}
                onChange={(e) =>
                  SetEmployeedata((prevState) => ({
                    ...prevState,
                    phonenumber: e.target.value,
                  }))
                }
                type="number"
                required
                placeholder="أدخل رقم الهاتف"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group dir="rtl" className="mb-3" controlId="formBasicEmail">
              <Form.Label>الصورة الشخصية</Form.Label>
              <ImageUpload image={image} setImage={setImage} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            خروج
          </Button>
          <Button variant="primary" onClick={handlesaveemployee}>
            تأكيد
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployeeModal;
