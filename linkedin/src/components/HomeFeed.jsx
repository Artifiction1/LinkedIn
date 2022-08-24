/** @format */

import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import "./HomeFeed.css";

const HomeFeed = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA",
          },
        }
      );

      let data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-people pt-3 ">
      <h4 className="text">People also viewed you</h4>
      <div className="pl-3 pt-2">
        {/* Loading profiles from fetched data */}
        {profiles.slice(30, 34).map((profile) => (
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
                <Col md={9} style={{ textAlign: "left", paddingLeft: "20px" }}>
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
  );
};

export default HomeFeed;
