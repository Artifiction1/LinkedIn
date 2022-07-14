/** @format */

//This is the Header that appears on the News Feed Page (Left hand side)

import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderLeft.css";
import { useEffect, useState } from "react";

const HeaderLeft = (props) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container id="headerMiniContainer">
      <Col className="d-flex flex-column justify-content-center">
        <Image
          src="https://media-exp2.licdn.com/dms/image/C4D16AQHmxrz58chkGQ/profile-displaybackgroundimage-shrink_200_800/0/1655924719323?e=1663200000&v=beta&t=UdIxq-awJA4w0g8X7fLO1nWsblAfd-PQaH2m06dKPR0"
          id="backgroundImage"
        />
        <Row className="d-flex flex-column align-items-center borderBottom ">
          <Image src={profile.image} id="userImage" className="mx-auto" />
          <div className="mb-3 mt-n3 text-center">
            <div className="font-weight-bold " id="userName">
              {profile.name} {profile.surname}
            </div>
            <div className="text-muted fontSize mt-3">{profile.title}</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="mx-3 my-2 px-0" style={{ fontSize: "15px" }}>
            <div className="d-flex justify-content-between">
              <div className="text-muted">Connections</div>
              <div
                className="font-weight-bold mr-5"
                style={{ color: "blue", marginRight: "20px" }}>
                500 +
              </div>
            </div>
            <div className="font-weight-bold items">Grow your network</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className=" my-2" style={{ fontSize: "15px" }}>
            <div className="text-muted items">
              Access exclusive tools & insights
            </div>
            <div className="d-flex flex-row">
              <div>
                <i className="bi bi-square-half" style={{ color: "gold" }}></i>
              </div>
              <div className="font-weight-bold txtBlue px-2">
                Try Premium for free
              </div>
            </div>
          </div>
        </Row>
        <Row className="fontSize headerMiniTag">
          <div
            className="d-flex flex-row px-0 mx-3 my-2"
            style={{ fontSize: "15px" }}>
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold px-2">My items</div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default HeaderLeft;

/* import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderLeft.css";

const HeaderLeft = () => {
  return (
    <Container id="headerMiniContainer" className="px-0">
      <Col className="d-flex flex-column justify-content-center">
        <Row>
          <Image
            src="https://t3.ftcdn.net/jpg/04/96/92/90/360_F_496929033_S9ahAsD3n2yk2ayua2TAzB4ZIiAfikIQ.jpg"
            id="backgroundImage"
          />
        </Row>
        <Row className="d-flex flex-column align-items-center borderBottom ">
          <Image
            src={
              "https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg"
            }
            id="userImage"
            className="mx-auto"
          />
          <div className="mb-3 mt-n3 text-center">
            <div className="font-weight-bold " id="userName">
              Shanmugasundaram Raja
            </div>
            <div className="text-muted fontSize">Epicode Student</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="w-100 mx-3 my-2">
            <div className="d-flex justify-content-between">
              <div className="text-muted">Connection</div>
              <div className="font-weight-bold" style={{ color: "blue" }}>
                122
              </div>
            </div>
            <div className="font-weight-bold">Grow your network</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="mx-3 my-2">
            <div className="text-muted ">Access exclusive tools & insights</div>
            <div className="d-flex flex-row">
              <div>
                <i
                  className="bi bi-square-half mr-2 "
                  style={{ color: "gold" }}></i>
              </div>
              <div className="font-weight-bold txtBlue">
                Try Premium for free
              </div>
            </div>
          </div>
        </Row>
        <Row className="fontSize headerMiniTag">
          <div className="d-flex flex-row mx-3 my-2">
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold">My items</div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default HeaderLeft;
 */
