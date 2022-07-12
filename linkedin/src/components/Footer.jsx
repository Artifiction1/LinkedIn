import { Container, Row, Col, Image } from "react-bootstrap";
import "../CssStyles/Footer.css";
import LinkedInLogo from "../assets/linkedin.png";

const Footer = () => {
  return (
    <Container>
      <Container className="footerBody">
        <Row className="footerLogo">
          <img src={LinkedInLogo} />
        </Row>
        <Row className="footer liItems">
          <Col xs={2}>
            <ul className="liItems">
              <li>ABout</li>
              <li>Community Guidelines</li>
              <li>About</li>
              <li>Sales Solutions</li>
              <li>Safety Center</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul className="liItems">
              <li>Accessibility</li>
              <li>Careers</li>
              <li>Ad Choices</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul className="liItems">
              <li>Talent Solutions</li>
              <li>Marketing Solutions</li>
              <li>Advertising</li>
              <li>Small Business</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;