/** @format */

import {
  Col,
  Container,
  Modal,
  Row,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import LeftSideBarCardProfile from "./LeftSideBarCardProfile";
import RightSideBar from "./RightSideBar";
import { useEffect, useState } from "react";
import "../css/Home.css";
import PostAddSection from "./PostAddSection";
import AddToFeed from "./AddToFeed";
import HeaderLeft from "./HeaderLeft";
import FooterRight from "./FooterRight";
import RecentBar from "./RecentBar";
import HomeFeed from "./HomeFeed";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);

  const [show, setShow] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editPost, setEditPost] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        const postList = await response.json();
        setPosts(postList);
        console.log(postList);
      } else {
        console.log("error happened fetching the articles");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostId,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        console.log("post deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editCurrentPost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostId,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
          body: JSON.stringify({ text: editPost }),
        }
      );
      if (response.ok) {
        console.log("post edited");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <HeaderLeft profile={profile} />
            <RecentBar />
          </Col>

          <Col xs={12} md={8} lg={6} style={{ height: "100%" }}>
            <PostAddSection />
            {posts
              .reverse()
              .slice(0, 50)
              .map((current, index) => {
                if (current.user) {
                  return (
                    <div className="single-post" key="nokey">
                      {/*This is the main container*/}
                      <div className="d-flex justify-content-between">
                        {/*This is post header*/}
                        <div className="d-flex">
                          {/*This is Profile Image*/}
                          <img
                            className="small-img"
                            src={current.user.image}
                            alt="userimage"
                          />
                          <div className="user-details">
                            <span className="person-name d-block">
                              {current.username}
                            </span>
                            <span className="person-title d-block">
                              {" "}
                              122 followers
                            </span>

                            <span className="post-details d-block">
                              <i
                                className="bi bi-globe"
                                style={{ fontSize: "12px" }}></i>
                            </span>
                          </div>
                        </div>
                        <div>
                          {current.user._id === "62cbecece6c0300015918143" && (
                            <Button
                              onClick={() => {
                                handleShow();
                                setCurrentPostId(current._id);
                              }}
                              className="more-button d-flex align-items-center justify-content-center">
                              <i className="bi bi-three-dots"></i>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div>{current.text}</div> {/* This is post body*/}
                      <img
                        className="img-body"
                        alt="post-img"
                        src="https://picsum.photos/200/300"
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
                }
              })}
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <label>Edit Post:</label>
                  <input
                    type="text"
                    required
                    value={editPost}
                    onChange={(e) => setEditPost(e.target.value)}
                  />
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    editCurrentPost();
                    handleClose();
                  }}
                  variant="primary">
                  Edit
                </Button>
                <Button onClick={deletePost} variant="primary">
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col md={3}>
            <HomeFeed />
            <FooterRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
