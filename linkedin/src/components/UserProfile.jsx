/** @format */

import { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { ArrowRight, Pencil, PeopleFill, Plus } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import "../css/Header.css";
import Experiences from "./Experiences";
import ModalImage from "./ModalImage";
import ModalProfile from "./ModalProfile";
import Sidebar from "./SideBar";

const UserProfile = () => {
  const [userProfileData, setUserProfileData] = useState({});

  const params = useParams();
  const userId = params.userId;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchUserData(userId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const fetchUserData = async (userId) => {
    try {
      const url =
        "https://striveschool-api.herokuapp.com/api/profile/" + userId;

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserProfileData(data);
      } else {
        console.log("Error Fetching Data!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <Row>
        <Col md={9}>
          <div id="mainSection">
            <div className="body-part" style={{ width: "100%" }}>
              <div className="bg-image">
                <img
                  id="bg-img"
                  src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
                  alt="bgimage"
                />
              </div>

              <img
                src={userProfileData.image}
                alt="user profile"
                className="userImgUpdated"
                onClick={handleShow}
              />
            </div>
            <div className="all-details">
              <div className="d-flex justify-content-between mt-5">
                <h3>{userProfileData.name}</h3>
                {/* <Button className="editButton">
                            <i className="bi bi-pencil"></i>
                          </Button> */}
              </div>
              <h4>{userProfileData.surname}</h4>
              <div className="mt-n1">{userProfileData.title}</div>
              <div style={{ fontSize: "14px" }} className="text-muted">
                {userProfileData.area}
                <button className="contact-btn" onClick={handleShow}>
                  <span className="contact-info">Contact info</span>
                </button>
                <Modal show={show} onHide={handleClose} className="modal-image">
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Info</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <i className="bi bi-envelope mail-icon"> Email</i>
                    <div className="mail">{userProfileData.email}</div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div style={{ fontSize: "14px" }} className="mt-2">
                <span>500+ connections</span>
              </div>

              <Button variant="primary" className="btns">
                Message
              </Button>
              <Button variant="outline-primary" className="btns">
                Connect
              </Button>
              <Button variant="outline-secondary" className="btns" id="more">
                More
              </Button>
              <Row>
                <Col md={6}>
                  <div className="open-to-work ">
                    <b>
                      <span className="d-block">Open to work</span>
                    </b>
                    <span className="d-block">Frontend Developer roles</span>
                    <b>
                      <span className="text-primary">See all details</span>
                    </b>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="about-me">
            <h3>About me</h3>
            <p>{userProfileData.bio}</p>
          </div>
          <Experiences/>
          <div className="education">
            <div className="div-edu">
              <h3>Education</h3>
            </div>
            <Row className="mt-4">
              <Col md={2} className="epicode-image">
                <img
                  className="epicode-logo"
                  width="48"
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1665619200&amp;v=beta&amp;t=DjYM-HwAlPdejyqSLlj26YmaPXtm_P5jgdQbvjbPkDI"
                  loading="lazy"
                  height="48"
                  alt="EPICODE logo"
                />
              </Col>
              <Col md={10}>
                <div className="education-body">
                  <span className="d-block">
                    <b>EPICODE</b>
                  </span>
                  <span className="d-block">
                    Web Development, Information Technology
                  </span>
                  <span className="d-block">April 2022 - Present</span>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col md={2} className="epicode-image">
                <img
                  width="48"
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQFGWOlauUVhUw/company-logo_100_100/0/1519922882620?e=1665619200&amp;v=beta&amp;t=DbBpID1D73UI1a-m-wIf7i3FyhssIk6cARole_IBGhw"
                  loading="lazy"
                  height="48"
                  alt="TU Bergakademie Freiberg logo"
                />
              </Col>
              <Col md={10}>
                <div className="education-body">
                  <span className="d-block">
                    <b>TU Bergakademie Freiberg</b>
                  </span>
                  <span className="d-block">
                    Master's degree, Metallic Materials Technology
                  </span>
                  <span className="d-block">Oct 2019 - Sep 2022</span>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
          <div className="skills">
            <div className="skills-div">
              <h3>Skills</h3>
              <Button
                variant="outline-primary"
                className="btns"
                style={{
                  cursor: "pointer",
                  marginLeft: "37rem",
                  marginTop: "-4rem",
                }}>
                Take skill quiz
              </Button>
              <Plus
                size="2.5rem"
                style={{
                  cursor: "pointer",
                  marginLeft: "46rem",
                  marginTop: "-7rem",
                }}
              />
              <Pencil
                size="1.2rem"
                style={{
                  cursor: "pointer",
                  marginLeft: "50rem",
                  marginTop: "-10rem",
                }}
              />
            </div>
            <div>
              <h6>HTML5</h6>
              <PeopleFill style={{ fontSize: "25px" }} />
              <span className="px-3">6 Endorsements</span>
            </div>
            <hr />
            <div>
              <h6>CSS</h6>
              <PeopleFill style={{ fontSize: "25px" }} />
              <span className="px-3">6 Endorsements</span>
            </div>
            <hr />
            <div>
              <h6>Java script</h6>
              <PeopleFill style={{ fontSize: "25px" }} />
              <span className="px-3">6 Endorsements</span>
            </div>
            <hr />
            <div style={{ textAlign: "center", color: "grey" }}>
              <span style={{ fontSize: "20px" }}>
                Show 10 skills <ArrowRight />
              </span>
            </div>
          </div>
        </Col>

        <Col md={3} className="px-0">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
