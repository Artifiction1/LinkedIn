import { Container, Row, Col } from "react-bootstrap";

import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import GetPosts from "./GetPosts";

const Profile = () => {
  const params = useParams();

  

  const [getExperience, setGetExperience] = useState([]);

  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me" ,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      let data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  useEffect(() => {
    fetchUser(params.id);
  }, []);

  return (
    <>
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={8} style={{ height: "100%" }}>
          
          
        </Col>

        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
    
    </>
  );
};

export default Profile;