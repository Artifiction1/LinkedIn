import { Container, Row, Col } from "react-bootstrap";

import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";

const Profile = () => {
  const params = useParams();

  

  const [getExperience, setGetExperience] = useState([]);

  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      let response = await fetch(
        "" + id,
        {
          headers: {
            Authorization:
              "",
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
    <Footer/>
    </>
  );
};

export default Profile;