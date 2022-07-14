/** @format */

import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Advertisement from "../assets/advertisement.jpg";
import "../css/SideBar.css";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Dot } from "react-bootstrap-icons";

const Sidebar = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );

      let data = await response.json();
      setProfiles(data.slice(0, 5));
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* edit-public-language section */}
      <div className="edit-public-language-container pb-1">
        {/* edit public profile */}
        <div className="d-flex justify-content-between m-2">
          <span className="edit-text ml-3"> Edit Public profile and url</span>
          <FontAwesomeIcon
            className="button-icon question-icon ml-auto mr-3"
            icon={faQuestionCircle}
          />
          <div>{""}</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between m-2">
          <span className="edit-text ml-3">
            {" "}
            Add profile in another language
          </span>
          <FontAwesomeIcon
            className="button-icon question-icon ml-auto mr-3"
            icon={faQuestionCircle}
          />
          <div>{""}</div>
        </div>
        <hr />
        {/* add profile in another language  */}
        <div className="sidebar-btn mt-2 mb-2 d-flex justify-content-between align-items-center">
          <div className="ml-3">
            <Button
              className="rounded-pill btn-sm long-btn pl-2"
              variant="primary">
              English
            </Button>{" "}
            <Button
              className="rounded-pill btn-sm long-btn"
              variant="outline-dark">
              {" "}
              German
            </Button>
          </div>
          <FontAwesomeIcon
            className="button-icon globe-icon ml-auto mr-4"
            icon={faGlobe}
          />
        </div>
      </div>

      <div className="edit-public-language-container d-flex justify-content-center p-0">
        <div className="advertisement">
          <Image src={Advertisement} fluid />
        </div>
      </div>

      {/* People you may know */}
      <div className="people pt-3 ">
        <h4 className="text">People you may know</h4>
        <div className="pl-3 pt-2">
          {/* Loading profiles from fetched data */}
          {profiles.reverse().map((profile) => (
            <div key={profile._id}>
              <Container>
                <Row>
                  <Col md={3}>
                    <Image
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      src={profile.image}
                      alt="Linkedin Member"></Image>
                  </Col>
                  <Col
                    md={9}
                    style={{ textAlign: "left", paddingLeft: "20px" }}>
                    <div>
                      <h6
                        style={{ fontSize: "14px", lineHeight: "1.4" }}
                        onClick={() => {
                          navigate(`/user/${profile._id}`);
                        }}>
                        {profile.name} {profile.surname}
                        <span className="text-muted font-weight-normal">
                          <Dot /> 2nd
                        </span>
                      </h6>
                      <h6
                        className="text-muted"
                        style={{ fontSize: "13px", lineHeight: "1.4" }}>
                        {profile.title}
                      </h6>
                      <Button
                        style={{
                          borderRadius: "50px",
                          fontSize: "16px",
                          width: "100px",
                        }}
                        variant="outline-dark"
                        className="font-weight-bold mb-2 text-muted p-1">
                        Connect
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </div>
      </div>
      <div className="people pt-3">
        <h4 className="text">People you may know</h4>
        <div className="pl-3 pt-2">
          {/* Loading profiles from fetched data */}
          {profiles.map((profile) => (
            <div key={profile._id}>
              <Container>
                <Row>
                  <Col md={3}>
                    <Image
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      src={profile.image}
                      alt="Linkedin Member"></Image>
                  </Col>
                  <Col
                    md={9}
                    style={{ textAlign: "left", paddingLeft: "20px" }}>
                    <div>
                      <h6
                        style={{ fontSize: "14px", lineHeight: "1.4" }}
                        onClick={() => {
                          navigate(`/user/${profile._id}`);
                        }}>
                        {profile.name}
                        <span className="text-muted font-weight-normal">
                          <Dot /> 2nd
                        </span>
                      </h6>
                      <h6
                        className="text-muted"
                        style={{ fontSize: "13px", lineHeight: "1.4" }}>
                        {profile.title}
                      </h6>
                      <Button
                        style={{
                          borderRadius: "50px",
                          fontSize: "16px",
                          width: "100px",
                        }}
                        variant="outline-dark"
                        className="font-weight-bold mb-2 text-muted p-1 connect-btn">
                        Connect
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
