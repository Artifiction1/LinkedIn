/** @format */

import { useState } from "react";
import { Modal, Button, Image, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./StartModal.css";

const StartModal = () => {
  const [show, setShow] = useState(false);

  const [post, setPost] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const profilesHave = useSelector((state) => state.fetchedProfiles);

  const newPost = async () => {
    try {
      const element = { text: post };
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
          body: JSON.stringify(element),
        }
      );

      if (response.ok) {
        let newPost = await response.json();

        setPost(newPost);
        console.log(post);
      } else {
        console.log("Something is wrong !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button id="startPostButton" onClick={handleShow}>
        Start a post
      </Button>

      <Modal id="postModal" onHide={handleClose} show={show}>
        <Modal.Header closeButton>
          <div style={{ fontSize: "19px" }} className="ml-2">
            Create a Post
          </div>
        </Modal.Header>

        <div className="d-flex gap-3 mt-3 image-section">
          <Image
            alt="profile-Image"
            style={{ borderRadius: "50%", objectFit: "cover" }}
            height="48px"
            width="48px"
            src={profilesHave.image}
            className="mt-2 image-icon"></Image>
          <div className="ml-5 mb-2">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "5px",
              }}>
              {profilesHave.name} {profilesHave.surname}
            </div>
            <Button id="sharingSettings">
              <i className="bi bi-globe" style={{ fontSize: "14px" }}></i>
              Anyone
            </Button>
          </div>
        </div>
        <div>
          <Form>
            <Form.Group className="m-3">
              <Form.Control
                style={{ border: "none" }}
                as="textarea"
                onChange={(e) => {
                  setPost(e.target.value);
                }}
                rows={3}
                placeholder="What do you want to talk about?"
              />
            </Form.Group>
          </Form>
        </div>
        <div
          className="ml-3"
          style={{ color: "#0a66c2", fontSize: "16px", fontWeight: "600" }}>
          Add hashtag
        </div>

        <Modal.Footer
          style={{ border: "none" }}
          className="ml-n2 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="pr-2"
              style={{ borderRight: "1px solid rgba(0, 0, 0, 0.08)" }}>
              <Form.Group style={{ display: "inline-block" }}>
                <Button className="postFooterbuttons">
                  <Form.Label for="image-upload" className="mb-0">
                    <i className="bi bi-image"></i>
                  </Form.Label>
                </Button>
                <Form.Control
                  type="file"
                  name="file_upload"
                  id="image-upload"
                  style={{ display: "none" }}
                  /* onChange={} */
                />
              </Form.Group>
              <Button className="postFooterbuttons">
                <i className="bi bi-play-btn-fill"></i>
              </Button>
              <Button className="postFooterbuttons">
                <i className="bi bi-file-earmark-text-fill"></i>
              </Button>
              <Button className="postFooterbuttons">
                <i className="bi bi-briefcase-fill"></i>
              </Button>
              <Button className="postFooterbuttons">
                <i className="bi bi-award-fill"></i>
              </Button>
              <Button className="postFooterbuttons">
                <i class="bi bi-bar-chart-line-fill"></i>
              </Button>
              <Button className="postFooterbuttons">
                <i class="bi bi-three-dots"></i>
              </Button>
            </div>
            <div>
              <Button className="postFooterbuttons ml-2">
                {" "}
                <i
                  style={{ fontSize: "14px" }}
                  class="bi bi-chat-text"></i>{" "}
                Anyone{" "}
              </Button>
            </div>
          </div>
          <Button
            id="postButton"
            /* disabled={} */
            onClick={() => {
              newPost();
              handleClose();
            }}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StartModal;
