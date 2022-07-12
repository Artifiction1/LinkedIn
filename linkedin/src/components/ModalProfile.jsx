/** @format */

import { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../redux/actions/actions";

const ModalProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editProfiles = useSelector((state) => state.editProfiles);

  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="track-title" class="col-form-label">
            Name
          </label>
          <input className="inputs-modal" type="text" id="name" />
        </Modal.Body>
        <Modal.Body>
          <label for="track-title" class="col-form-label">
            Title
          </label>
          <input className="inputs-modal" type="text" id="title" />
        </Modal.Body>
        <Modal.Body>
          <label for="track-title" class="col-form-label">
            Area
          </label>
          <input className="inputs-modal" type="text" id="area" />
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
      {editProfiles && (
        <div className="mt-5">
          <h1>{editProfiles.name}</h1>
          <h2>{editProfiles.title}</h2>
          <h3>{editProfiles.area}</h3>
        </div>
      )}
    </>
  );
};

export default ModalProfile;
