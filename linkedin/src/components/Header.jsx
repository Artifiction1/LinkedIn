/** @format */

import { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { ArrowRight, Pencil, PeopleFill, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import "../css/Header.css";
import { fetchProfilesAction } from "../redux/actions/actions";
import Experiences from "./Experiences";
import ModalImage from "./ModalImage";
import ModalProfile from "./ModalProfile";

export default function Header() {
  const profilesHave = useSelector((state) => state.fetchedProfiles);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div id="mainSection">
        <div className="body-part" style={{ width: "100%" }}>
          <div className="bg-image">
            <img
              id="bg-img"
              src="https://media-exp2.licdn.com/dms/image/C4D16AQHmxrz58chkGQ/profile-displaybackgroundimage-shrink_350_1400/0/1655924719323?e=1663200000&v=beta&t=hOQhQn96QRuSe7iEO-JnOOt9d_z5nzRwuWUN-yMyx7M"
              alt="bgimage"
            />
          </div>

          <ModalImage />

          <Button className="editButton">
            <i className="bi bi-pencil"></i>
          </Button>
        </div>
        <div className="all-details">
          {profilesHave && (
            <>
              <div className="d-flex justify-content-between mt-5">
                <h3>
                  {profilesHave.name} {""} {profilesHave.surname}
                </h3>
                {/* <Button className="editButton">
                    <i className="bi bi-pencil"></i>
                  </Button> */}
                <img
                  style={{ width: "32px", height: "32px" }}
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1665619200&v=beta&t=DjYM-HwAlPdejyqSLlj26YmaPXtm_P5jgdQbvjbPkDI"
                  alt=""
                />
                <h5 className="epicode">EPICODE</h5>
                <ModalProfile />
              </div>

              <div className="mt-n1">{profilesHave.title}</div>
              <div style={{ fontSize: "14px" }} className="text-muted">
                {profilesHave.area}
                <button className="contact-btn" onClick={handleShow}>
                  <span className="contact-info">Contact info</span>
                </button>

                <Modal show={show} onHide={handleClose} className="modal-image">
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Info</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <i className="bi bi-envelope mail-icon"> Email</i>
                    <div className="mail">{profilesHave.email}</div>
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
            </>
          )}

          <Button variant="primary" className="btns">
            Open to
          </Button>
          <Button variant="outline-primary" className="btns">
            Add profile section
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
            <Col md={6}>
              <div className="potential-clients ">
                <b>
                  <span className="d-block">Find potential clients</span>
                </b>
                <span className="d-block">Tell us about your services</span>
                <b>
                  <span className="text-primary">Get Started</span>
                </b>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="about-me">
        <h3>About me</h3>
        <p>{profilesHave.bio}</p>
      </div>
      <Experiences />
      <div className="education">
        <div className="div-edu">
          <h3>Education</h3>
          <Plus
            size="2.5rem"
            style={{
              cursor: "pointer",
              marginLeft: "46rem",
              marginTop: "-5rem",
            }}
          />
          <Pencil
            size="1.2rem"
            style={{
              cursor: "pointer",
              marginLeft: "50rem",
              marginTop: "-8rem",
            }}
          />
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
    </Container>
  );
}
