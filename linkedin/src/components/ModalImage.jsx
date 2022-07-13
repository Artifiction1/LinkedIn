/** @format */

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../css/ModalImage.css";

const ModalImage = () => {
  const profilesHave = useSelector((state) => state.fetchedProfiles);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={profilesHave.image}
        alt="user profile"
        className="userImgUpdated"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <div className="modal-image">
          <Modal.Header>
            <Modal.Title>Profile Photo</Modal.Title>
            <button className="close-btn" onClick={handleClose}>
              <i class="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <img
              src={profilesHave.image}
              alt="user profile"
              className="modal-profile"
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="add-section">
              <Button className="photo-icons" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </Button>

              <span>Edit</span>
            </div>
            <div className="add-section">
              <Button className="photo-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                </svg>
              </Button>
              <input type="file" />
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalImage;
