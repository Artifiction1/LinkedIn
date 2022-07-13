//This is the Header that appears on the News Feed Page (Left hand side)
import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderLeft.css";
import {useEffect, useState } from "react";



const HeaderLeft = (props) => {
    const [profile, setProfile] = useState([])
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
              /*Token*/"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
       setProfile(data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <Container id="headerMiniContainer" className="px-0">
    <Col className="d-flex flex-column justify-content-center">
      {/* <Row>
        <Image
          src="https://picsum.photos/id/237/200/300"
          id="backgroundImage"
        />
      </Row> */}
      <Row className="d-flex flex-column align-items-center borderBottom ">
        <Image src={profile.image} id="userImage" className="mx-auto" />
        <div className="mb-3 mt-n3 text-center">
          <div className="font-weight-bold " id="userName">
          {profile.name} {profile.surname}
          </div>
          <div className="text-muted fontSize">{profile.title}</div>
        </div>
      </Row>
      <Row className="borderBottom fontSize headerMiniTag">
        <div className="w-100 mx-3 my-2">
          <div className="d-flex justify-content-between">
            <div className="text-muted">Connection</div>
            <div className="font-weight-bold" style={{ color: "blue" }}>
              1
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
                style={{ color: "gold" }}
              ></i>
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