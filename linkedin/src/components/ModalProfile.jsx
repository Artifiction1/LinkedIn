/** @format */

import { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../redux/actions/actions";

const ModalProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Button className="edit" onClick={handleShow}>
        <i className="bi bi-pencil "></i>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="input-groups">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control className="input-fields" type="text" id="name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  className="input-fields"
                  type="text"
                  id="surname"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control className="input-fields" type="text" id="title" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control className="input-fields" type="text" id="area" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control className="input-fields" type="text" id="bio" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(editProfileAction())}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;
