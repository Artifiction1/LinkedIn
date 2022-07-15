/** @format */

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Adv from "../assets/advertisement.jpg";
import "./Advert.css";

const Advert = () => {
  return (
    <Container
      id="headerMiniContainer"
      className="px-0 mt-2 d-flex justify-content-center">
      <Image id="adv" src={Adv} />
    </Container>
  );
};

export default Advert;
