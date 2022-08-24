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
import { format, parseISO } from "date-fns";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);

  const [show, setShow] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showImage, setShowImage] = useState(null);

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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA",
          },
        }
      );
      if (response.ok) {
        const postList = await response.json();
        setPosts(postList.reverse().slice(0, 20));
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA",
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

  const postImage = async () => {
    const data = new FormData();

    data.append("post", showImage);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostId,

        {
          method: "POST",
          body: data,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA2Mjk1YTJlZThkNjAwMTU0OGRlMDkiLCJpYXQiOjE2NjEzNDgxODcsImV4cCI6MTY2MjU1Nzc4N30.URz0tug9Gqbu9_CZ_qzivf3oqKg6jgOwvf4JQrICDoA",
          },
        }
      );

      if (response.ok) {
        console.log("Image uploaded");
      } else {
        console.log("Error !!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={4} lg={3}>
            <HeaderLeft profile={profile} />
            <RecentBar />
          </Col>

          <Col xs={12} md={8} lg={5} style={{ height: "100%" }}>
            <PostAddSection />
            {posts.map((current, index) => {
              if (current.user) {
                return (
                  <div className="single-post" key={current._id}>
                    {/*This is the main container*/}
                    <div className="d-flex justify-content-between">
                      <Container>
                        <Row>
                          <Col xs={2} className="pr-0 pl-0">
                            <img
                              className="img-fluid image-small"
                              style={{
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
                              }}
                              src={current.user.image}
                              alt="profile"
                            />
                          </Col>
                          <Col
                            xs={9}
                            className="text-left pl-0 mt-1"
                            style={{ lineHeight: "2px", textAlign: "left" }}>
                            <h6>
                              {current.user.name} {current.user.surname}
                            </h6>

                            <p style={{ fontSize: "12px" }}>
                              {current.user.title}
                            </p>
                            <p style={{ fontSize: "10px" }}>
                              {format(parseISO(current.updatedAt), "MMMM dd")}
                            </p>
                          </Col>
                        </Row>
                      </Container>

                      {/* <div className="d-flex">
                         
                          <img
                            className="small-img"
                            src={current.user.image}
                            alt="userimage"
                          />
                          <div className="user-details">
                            <span className="person-name d-flex flex-column">
                              {current.username}
                            </span>
                            <span className="person-title d-flex flex-column">
                              {" "}
                              122 followers
                            </span>

                            <span className="post-details d-flex flex-column">
                              <i
                                className="bi bi-globe"
                                style={{ fontSize: "12px" }}></i>
                            </span>
                          </div>
                        </div> */}
                      <div>
                        {current.user._id === "6306295a2ee8d6001548de09" && (
                          <Button
                            onClick={() => {
                              handleShow();
                              setCurrentPostId(current._id);
                            }}
                            className="more-button d-flex align-items-center justify-content-center">
                            <i className="bi bi-pencil-square"></i>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div>{current.text}</div> {/* This is post body*/}
                    {current.image && (
                      <img
                        className="img-body"
                        alt="post-img"
                        src={current.image}
                      />
                    )}
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
              <div id="modal-whole">
                <Modal.Header closeButton>
                  <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <input
                      className="edit-input"
                      type="text"
                      required
                      value={editPost}
                      onChange={(e) => setEditPost(e.target.value)}
                    />
                  </Form>
                  <form className="mt-3">
                    <input
                      type="file"
                      onChange={(e) => setShowImage(e.target.files[0])}
                    />
                  </form>
                </Modal.Body>

                <Modal.Footer>
                  <Button className="modal-btns gap-0">Post Image</Button>
                  <Button
                    className="modal-btns gap-0"
                    type="button"
                    onClick={async () => {
                      editCurrentPost();
                      handleClose();
                      fetchPosts();
                      await postImage();
                      fetchPosts();
                    }}>
                    Edit
                  </Button>
                  <Button
                    className="modal-btns"
                    onClick={() => {
                      deletePost();
                      handleClose();
                      fetchPosts();
                    }}>
                    Delete
                  </Button>
                </Modal.Footer>
              </div>
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
