/** @format */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBarCardProfile from "./LeftSideBarCardProfile";
import RightSideBar from "./RightSideBar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  const fetchPosts = async () => {
    try {
      let response = await fetch();
      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {
      let response = await fetch("");
      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProfile();
  }, []);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col xs={12} md={4} lg={2} style={{ height: "100%" }}>
          <LeftSideBarCardProfile profile={profile} />
        </Col>
        <Col xs={12} md={8} lg={6} style={{ height: "100%" }}>
          <NewPost
            profile={profile}
            setPosts={setPosts}
            posts={posts}
            fetchPosts={fetchPosts}
          />
          <ExistingPosts
            profile={profile}
            posts={posts}
            fetchPosts={fetchPosts}
          />
        </Col>

        <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
