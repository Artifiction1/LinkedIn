/** @format */

import "./Learn.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Adv from "../assets/advertisement.jpg";
import "./Advert.css";

const Learn = () => {
  return (
    <>
      <Container
        id="headerMiniContainer"
        className="px-2 mt-2 d-flex justify-content-center">
        <div id="learningSection">
          <i
            style={{ fontSize: "14px", color: "#0a66c2" }}
            className="bi bi-linkedin mr-1"></i>
          <span style={{ fontSize: "13px", fontWeight: "500" }}>LEARNING</span>
          <div className="my-2 subtitle">
            Add new skills with these courses, free <br /> for 24 hours{" "}
          </div>
          <div className="d-flex mt-2">
            <div className="position-relative">
              <Image id="img2" src={Adv} alt="Linkedin-Learning" />
              <div className="circleRelative">
                <i className="bi bi-play-fill "></i>
              </div>
            </div>

            <div className="ml-2 d-flex flex-column justify-content-between">
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Get more jobs
              </div>
              <small className="text-muted">15,888 viewers</small>
            </div>
          </div>
          <hr />
          <div className="d-flex mt-2 mb-3">
            <div className="position-relative">
              <Image
                id="img2"
                src="https://www.laneways.agency/wp-content/uploads/2020/09/Use-The-Right-Software-Development-Process-Agile-Development-Laneways.Agency.jpg"
                alt="Linkedin-Learning"
              />
              <div className="circleRelative">
                <i className="bi bi-play-fill "></i>
              </div>
            </div>
            <div className="ml-2 d-flex flex-column justify-content-between ">
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Agile Development Practices
              </div>
              <small className="text-muted">127,814 viewers</small>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div id="learningButton" className="py-2">
              See more recommendations
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Learn;
