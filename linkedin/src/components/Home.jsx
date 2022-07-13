/** @format */

import { Col, Container, Modal, Row, Form, Button } from "react-bootstrap";
import LeftSideBarCardProfile from "./LeftSideBarCardProfile";
import RightSideBar from "./RightSideBar";
import { useEffect, useState } from "react";
import "../css/Home.css";
import PostAddSection from "./PostAddSection";
import AddToFeed from "./AddToFeed";
import HeaderLeft from "./HeaderLeft";
import FooterRight from "./FooterRight";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);

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

  useEffect(() => {
    fetchPosts();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Col xs={12} md={4} lg={3} style={{ height: "100%" }}>
              <HeaderLeft profile={profile} />
            </Col>
            <Col xs={12} md={8} lg={6} style={{ height: "100%" }}>
              <PostAddSection />
              {posts
                .reverse()
                .slice(0, 50)
                .map((current, index) => {
                  if (current.user) {
                    return (
                      <div className="news-feed d-flex flex-column">
                        {current.user._id === "62cbecece6c0300015918143" && (
                          <>
                            <button
                              onClick={handleShow}
                              className="align-self-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                fill="currentColor"
                                className="bi bi-three-dots"
                                viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                            </button>
                          </>
                        )}
                        <Modal
                          show={show}
                          onHide={handleClose}
                          animation={false}>
                          <Modal.Header>
                            <Modal.Title>Edit Profile</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <div className="input-groups">
                                <Form.Group>
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control
                                    className="input-fields"
                                    type="text"
                                    id="name"
                                  />
                                </Form.Group>
                              </div>
                            </Form>
                          </Modal.Body>

                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary">Edit</Button>
                          </Modal.Footer>
                        </Modal>

                        <div className="main-section">
                          <div className="top-part">
                            <div>
                              <img
                                className="small-img"
                                src={current.user.image}
                              />{" "}
                              <span>{current.username} </span>
                            </div>

                            <div className="blue-follow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-plus"
                                viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>
                              <span>Follow</span>
                            </div>
                          </div>
                          <div>{current.text}</div>
                          <div>
                            {" "}
                            <img
                              className="img-body"
                              src={current.user.image}
                            />
                          </div>
                        </div>

                        <hr />

                        <div className="d-flex bottom-icons">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-hand-thumbs-up"
                              viewBox="0 0 16 16">
                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                            <span>Like</span>
                          </div>

                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-chat-text"
                              viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <span>Comment</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-arrow-90deg-right"
                              viewBox="0 0 16 16">
                              <path
                                fillRule="evenodd"
                                d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                              />
                            </svg>
                            <span>Share</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-send-fill"
                              viewBox="0 0 16 16">
                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                            </svg>
                            <span>Send</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </Col>
            <Col
              md={3}
              className="d-none d-md-block"
              style={{ height: "100%" }}>
              <AddToFeed />
              <FooterRight />
            </Col>
          </Row>
        </Container>

        {/* <NewPost profile={profile} setPosts={setPosts} posts={posts} fetchPosts={fetchPosts} />
        <ExistingPosts profile={profile} posts={posts} fetchPosts={fetchPosts} /> */}
        {/* <div>{postsTwo.text}</div> */}
      </div>
    </>
  );
};

export default Home;
