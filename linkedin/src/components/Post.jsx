/** @format */

import { Image, Button } from "react-bootstrap";

import "./Post.css";

const Post = (props) => {
  // This is for estimating how much time passed since posting the post

  /* This function changes like icon color when clicked on */
  const likePost = (e) => {
    if (e.target.classList.value === "bi bi-hand-thumbs-up") {
      e.target.style.color = "#0a66c2";
      e.target.classList = "bi bi-hand-thumbs-up-fill";
    } else if (e.target.classList.value === "bi bi-hand-thumbs-up-fill") {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      e.target.classList = "bi bi-hand-thumbs-up";
    }
  };

  return (
    <div className="single-post" key="nokey">
      {/*This is the main container*/}
      <div className="d-flex justify-content-between">
        {/*This is post header*/}
        <div className="d-flex">
          {/*This is Profile Image*/}

          <div className="d-flex flex-column">
            <div className="person-name">Shanmugasundaram Raja</div>
            <div className="person-title"> 122 followers</div>

            <div className="post-details">
              <i className="bi bi-globe" style={{ fontSize: "12px" }}></i>
            </div>
          </div>
        </div>
        <div>
          <Button className="more-button d-flex align-items-center justify-content-center">
            <i className="bi bi-three-dots"></i>
          </Button>
        </div>{" "}
      </div>
      <div>Dummy feed</div> {/* This is post body*/}
      <Image
        alt="post-img"
        src={
          "https://thumbs.dreamstime.com/b/donald-trump-june-vector-illustration-us-president-185680981.jpg"
        }
      />
      <hr />
      <div className="d-flex justify-content-around mt-n2 mb-n3">
        {/* This is post footer */}
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i
            className="bi bi-hand-thumbs-up"
            onClick={(e) => {
              likePost(e);
            }}>
            <span>Like</span>
          </i>
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i className="bi bi-chat-text"></i>Comment
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i className="bi bi-arrow-right"></i>Share
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i className="bi bi-send-fill"></i>Send
        </Button>
      </div>
    </div>
  );
};

export default Post;
