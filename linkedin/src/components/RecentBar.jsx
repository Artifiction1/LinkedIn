/** @format */

import "./RecentBar.css";
import { Container, Col, Row, Button } from "react-bootstrap";

const RecentBar = () => {
  return (
    <div className="whole-recent">
      <Container
        id="tagSectionContainer"
        className="px-0 d-none d-md-inline-block">
        <Col className="px-0">
          <Row className="flex-column my-3 mx-3">
            <div className="fontSizeRecent" style={{ fontSize: "15px" }}>
              Recent
            </div>
            <div className="recent-divone">
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                <i className="bi bi-people-fill people-icon"></i>
                <div style={{ fontSize: "15px" }}>
                  Javascript Full Stack Developer
                </div>
              </div>
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                <i className="bi bi-people-fill people-icon"></i>
                <div style={{ fontSize: "15px" }}>
                  Front End Developer Group
                </div>
              </div>
              <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                <i className="bi bi-people-fill people-icon"></i>
                <div style={{ fontSize: "15px" }}>UX Designer| Ui Designer</div>
              </div>
            </div>
          </Row>
          <Row className="flex-column my-3 mx-3">
            <div className="groups-div">
              <div className="fontSizeGroups">Groups</div>
              <div className="">
                <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                  <i className="bi bi-people-fill people-icon"></i>
                  <div style={{ fontSize: "15px" }}>
                    Javascript Full Stack Developer
                  </div>
                </div>
                <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                  <i className="bi bi-people-fill people-icon"></i>
                  <div style={{ fontSize: "15px" }}>
                    Front End Developer Group
                  </div>
                </div>
                <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
                  <i className="bi bi-people-fill people-icon"></i>
                  <div style={{ fontSize: "15px" }}>
                    UX Designer| Ui Designer
                  </div>
                </div>
                <Button className="tag-button d-block">
                  Show More{" "}
                  <i
                    style={{ fontSize: "13px" }}
                    className="bi bi-chevron-compact-down"></i>
                </Button>
              </div>
            </div>
          </Row>
          <Row className="justify-content-between my-3 mx-3">
            <div className="fontSizeGroups">Events</div>
            <div>
              <i className="bi bi-plus-lg" id="plusEventsSign"></i>
            </div>
          </Row>
          <Row className="fontSizeGroups  mx-3 " id="">
            <div>Followed Hashtags</div>
          </Row>
          <hr className="w-100 mx-0" />
          <Row id="styleDiscoverMore" className="mt-2">
            <div className="m-auto">Discover More</div>
          </Row>
        </Col>
      </Container>
      <Button className="tag-button d-block d-md-none">
        Show Less{" "}
        <i
          style={{ fontSize: "13px" }}
          className="bi bi-chevron-compact-up"></i>
      </Button>
    </div>
  );
};

export default RecentBar;
