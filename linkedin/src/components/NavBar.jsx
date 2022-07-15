/** @format */

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "../css/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MyNavbar = () => {
  const [profile, setProfile] = useState([]);

  const [filteredData, setfilteredData] = useState([]);

  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (event) => {
    const searchProfile = event.target.value;
    const newFilter = profile.filter((value) => {
      return value.name.toLowerCase().includes(searchProfile.toLowerCase());
    });

    if (searchProfile.length > 0) {
      setfilteredData(newFilter);
    } else {
      setfilteredData([]);
    }
  };

  const onInputClick = (hasItBeenClicked) => {
    console.log(hasBeenClicked);
    setHasBeenClicked(hasItBeenClicked);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        id="Navbar"
        className="d-flex justify-content-center py-0 flex-nowrap">
        <Container
          fluid
          style={{ width: "100vw" }}
          className="d-flex align-items-center">
          <i id="linkedinIcon" className="bi bi-linkedin"></i>
          <div
            style={{
              backgroundColor: "#eef3f8",
              width: "280px",
              height: "34px",
            }}
            className="d-flex justify-content-left align-items-center">
            <i
              className="bi bi-search mx-3"
              style={{ color: "grey", fontSize: "16px" }}></i>
            <Form id="searchBar" className="d-none d-md-inline-block">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
                onClick={() => onInputClick(false)}
                style={{
                  backgroundColor: "#eef3f8",
                  border: "none",
                  height: "34px",
                  width: "110%",
                }}
                onChange={handleFilter}
              />
            </Form>
            {filteredData.length !== 0 && (
              <ListGroup
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "237px",
                  zIndex: "3",
                }}>
                {filteredData.slice(0, 10).map((profile) => {
                  return (
                    <ListGroupItem>
                      <Link to={`/user/${profile._id}`}>
                        <div
                          className="search-list"
                        onClick={() => {onInputClick(true);setfilteredData([])}}>
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                            }}
                            src={profile.image}
                            alt=""
                          />
                          <span
                            className="mx-3"
                            style={{ color: "black", fontSize: "14px" }}>
                            <strong>{profile.name}</strong>
                          </span>
                        </div>
                      </Link>
                      <span style={{ color: "black", fontSize: "14px" }}>
                        {profile.title}
                      </span>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            )}
          </div>

          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="/">
            <i className="iconNavBar bi bi-house-door-fill "></i>
            <span className="d-none d-md-inline-block mt-n1">Home</span>
          </Nav.Link>
          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="#home">
            <i className="iconNavBar bi bi-people-fill"></i>
            <span className="d-none d-md-inline-block mt-n1">Network</span>
          </Nav.Link>
          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="#home">
            <i className="iconNavBar bi bi-briefcase-fill"></i>
            <span className="d-none d-md-inline-block mt-n1">Job</span>
          </Nav.Link>
          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="#home">
            <i className="iconNavBar bi bi-chat-dots-fill"></i>
            <span className="d-none d-md-inline-block mt-n1">Messaging</span>
          </Nav.Link>
          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="#home">
            <i className="iconNavBar bi bi-bell-fill"></i>
            <span className="d-none d-md-inline-block mt-n1">Notification</span>
          </Nav.Link>
          <Link
            to="/userprofile"
            className="containerIconAndNameNavBar d-flex flex-column align-items-center nav-link"
            id="userImg">
            <Image
              id="UserImageNavbar"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              roundedCircle
            />
            <span
              className="d-none d-md-inline-block"
              style={{ marginTop: "0rem" }}>
              Me
            </span>
          </Link>
          <Nav.Link
            className="containerIconAndNameNavBar d-flex flex-column align-items-center"
            href="">
            <i className="iconNavBar bi bi-grid-3x3-gap-fill"></i>
            <span className="d-none d-md-inline-block mt-n1">Work</span>
          </Nav.Link>
          <Nav.Link
            id="tryPremium"
            style={{ color: "#915907" }}
            className="d-flex flex-column align-items-center">
            <div>Try Premium</div>
            <div>for free</div>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
