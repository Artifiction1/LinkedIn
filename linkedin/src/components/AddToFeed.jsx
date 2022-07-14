/** @format */

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./AddToFeed.css";

const AddToFeed = () => {
  return (
    <Container id="feedContainer">
      <div className="d-flex justify-content-between mt-2">
        <div id="titleFeedCard">Add to your feed</div>
        <i id="infoIcon" className="bi bi-info-square-fill"></i>
      </div>
      <Col>
        <Row className="pl-0 my-3 feedProfile">
          <Image
            className="imgFeed pl-0"
            src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg"
          />
          <div className="ml-2">
            <div className="feedTitle">Raja</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary">
                <i className="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image
            className="imgFeed pl-0"
            src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg"
          />
          <div className="ml-2">
            <div className="feedTitle">Agris</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary">
                <i className="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image
            className="imgFeed pl-0"
            src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg"
          />
          <div className="ml-2">
            <div className="feedTitle">Ganesh</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div className="ButtonFollow">
                <i className="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="d-flex feedProfile" id="viewAllRecomandation">
            <div className="mt-1">View All Recommandation</div>
            <i className="bi bi-arrow-right ml-2 " id="arrowFeed"></i>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default AddToFeed;
