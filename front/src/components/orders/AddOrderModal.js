import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addOrderToEmployeeApi } from "../../api/Orders";
import moment from "moment";

function AddOrderModal({
  showAdd,
  setShowAdd,
  info,
  selectedEmployee,
  getcurrentEmployees,
}) {


    const [customer,setCustomer]=useState("");
  const handleOpenClose = () => {
    setShowAdd(!showAdd);
  
    console.log(info);
  };

  function addOrderForEmployee() {
    addOrderToEmployeeApi(selectedEmployee.id, {
      start: moment(info.start).utcOffset(0, true).format()  ,
      end: moment(info.end).utcOffset(0, true).format() ,
      title: JSON.stringify({description:"object",name:"name"}),
    }).then((res) => {
      getcurrentEmployees();
      handleOpenClose();
    });
  }
  if (!info) {
    return <></>;
  }
  return (
    <Modal show={showAdd} onHide={handleOpenClose}>
      <Modal.Header closeButton>
        <Modal.Title>اضافة موعد</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e)=>e.preventDefault()}>
          <Form.Group dir="rtl" className="mb-3" controlId="formBasicEmail">
            <Form.Label>اسم الحريف</Form.Label>
            <Form.Control
            onSubmit={(e)=>e.preventDefault()}
              onChange={(e) => {setCustomer(e.target.value)}}
              type="text"
              required
              placeholder="أدخل الاسم"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img
                alt="employee"
                src={
                  selectedEmployee
                    ? selectedEmployee.image
                    : "https://cdn4.iconfinder.com/data/icons/barber-shop-21/512/Musttache_man_mustache_face_barber_hair_style-512.png"
                }
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "20px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div>
              <p>من {info.start.toLocaleTimeString()} </p>
              <p>الى {info.end.toLocaleTimeString()} </p>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant="secondary" onClick={handleOpenClose}>
          الغاء
        </Button>
        <Button variant="primary" onClick={addOrderForEmployee}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddOrderModal;
