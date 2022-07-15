/** @format */

import { Image, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PostAddSection.css";
import StartModal from "./StartModal";

const PostAddSection = (props) => {
  const profilesHave = useSelector((state) => state.fetchedProfiles);

  return (
    <Container id="postAddSection">
      <div className="d-flex mt-4">
        <Link to=" ">
          <Image alt="profile-image" src={profilesHave.image}></Image>
        </Link>
        <StartModal />
      </div>
      <div className="d-flex justify-content-between mb-n3 mt-3">
        <Button className="post-buttons d-flex align-items-center">
          <i style={{ color: "#70b5f9" }} className="bi bi-image"></i> Photo
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i style={{ color: "#7fc15e" }} className="bi bi-play-btn-fill"></i>
          Video
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i style={{ color: "#e7a33e" }} className="bi bi-calendar2-date"></i>
          Event
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i style={{ color: "#fc9295" }} className="bi bi-newspaper"></i> Write
          Article
        </Button>
      </div>
    </Container>
  );
};

export default PostAddSection;
