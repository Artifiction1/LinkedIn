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
        /*fetch prfile with id*/ "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              /*Token*/ "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
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
            className="d-flex flex-row px-0 mx-3 my-2 "
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
