/** @format */

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./AddToFeed.css";

const AddToFeed = () => {
  return (
    <Container id="feedContainer">
      <div className="d-flex justify-content-between mt-2">
        <div id="titleFeedCard">Add to your feed</div>
        <i id="infoIcon" class="bi bi-info-square-fill"></i>
      </div>
      <Row>
        <div className="pl-0 my-3 feedProfile">
          <Col md={3}>
            <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          </Col>
          <Col md={9}>
            <div>
              <div className="feedTitle">Raja</div>
              <div className="feedJobType">Epicode Student</div>
              <div className="d-flex flex-row">
                <div
                  className="rounded-pill ButtonFollow"
                  variant="outline-secondary">
                  <i class="bi bi-plus"></i>
                  Follow
                </div>
              </div>
            </div>
          </Col>
        </div>
        <div className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          <div className="ml-2">
            <div className="feedTitle">Agris</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary">
                <i class="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </div>
        <div className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          <div className="ml-2">
            <div className="feedTitle">Ganesh</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div className="ButtonFollow">
                <i class="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </div>
        <Col>
          <div className="d-flex feedProfile" id="viewAllRecomandation">
            <div className="mt-1">View All Recommandation</div>
            <i class="bi bi-arrow-right ml-2 " id="arrowFeed"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToFeed;
