//imports
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addEmployeeApi, EditEmployeeApi } from "../../../api/Employee";
import ImageUpload from "../../../utils/ImageUpload";
import { EmployeeContext } from "../../../contexts/EmployeeContext";
import { useAuth } from "../../../contexts/AuthContext";

//Begin

function AddEmployeeModal() {
  //Getting context state
  const {
    show,
    setShow,
    getcurrentEmployees,
    isEdit,
    setSelectedEmployee,
    selectedEmployee,
  } = useContext(EmployeeContext);

  const auth = useAuth()
  useEffect(() => {
    SetEmployeedata(
      selectedEmployee
        ? selectedEmployee
        : {
            firstname: "",
            lastname: "",
            phonenumber: "",
          }
    );
    setImage(selectedEmployee ? selectedEmployee.image : "");
  }, [show, selectedEmployee]);

  //Show Hide Modal
  const handleClose = () => {
    setShow(false);
    setSelectedEmployee(null);
  };

  //Employee initial empty object structure
  const [employeedata, SetEmployeedata] = useState(
    !selectedEmployee
      ? {
          firstname: "",
          lastname: "",
          phonenumber: "",
        }
      : selectedEmployee
  );
  const [image, setImage] = useState(
    !selectedEmployee ? "" : selectedEmployee.image
  );

  //Api to save employee and check inputs
  const handlesaveemployee = async () => {
    if (
      employeedata.firstname.length === 0 ||
      employeedata.lastname.length === 0 ||
      employeedata.phonenumber.length === 0 ||
      image.length === 0
    ) {
      alert("الرجاء التأكد من المعلومات");
    } else {
      if (!isEdit) {
        auth.setLoading(true);

        await addEmployeeApi({ ...employeedata, image })
          .then(() => {
            getcurrentEmployees();
            auth.setLoading(false);
            handleClose();
            SetEmployeedata({
              firstname: "",
              lastname: "",
              phonenumber: "",
            });
            setImage("");
          })
          .catch((err) => {
            alert("حدث خطأ");
            auth.setLoading(false);
          });
      } else {
        auth.setLoading(true);

        await EditEmployeeApi(selectedEmployee.id, {
          ...employeedata,
          image,
        }).then(() => {
          getcurrentEmployees();
          auth.setLoading(false);

          SetEmployeedata({
            firstname: "",
            lastname: "",
            phonenumber: "",
          });
          setImage("");
          handleClose();
        }).catch((err) => {
          alert("حدث خطأ");
          auth.setLoading(false);
        });
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "تعديل عامل" : "اضافة عامل"} </Modal.Title>
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
