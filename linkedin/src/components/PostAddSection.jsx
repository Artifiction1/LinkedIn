import { Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostAddSection.css";

const PostAddSection = (props) => {
 

  return (
    <Container id="postAddSection">
      <div className="d-flex">
        
      <Link to=" ">
          <Image alt="profile-image" src=/*{props.a.b}*/"https://wallpaperaccess.com/full/2213426.jpg"></Image>
        </Link>
    
        <Button
          id="startPostButton"
          onClick={() => {
           /* This shows the modal that allows for post creation */
          }}
        >
          Start a post
        </Button>
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