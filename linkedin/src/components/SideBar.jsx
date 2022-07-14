/** @format */

import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Advertisement from "../assets/advertisement.jpg";
import "../css/SideBar.css";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );

      let data = await response.json();
      setProfiles(data.slice(0, 5));
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* edit-public-language section */}
      <div className="edit-public-language-container pb-1">
        {/* edit public profile */}
        <div className="d-flex justify-content-between m-2">
          <span className="edit-text ml-3"> Edit Public profile and url</span>
          <FontAwesomeIcon
            className="button-icon question-icon ml-auto mr-3"
            icon={faQuestionCircle}
          />
          <div>{""}</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between m-2">
          <span className="edit-text ml-3">
            {" "}
            Add profile in another language
          </span>
          <FontAwesomeIcon
            className="button-icon question-icon ml-auto mr-3"
            icon={faQuestionCircle}
          />
          <div>{""}</div>
        </div>
        <hr />
        {/* add profile in another language  */}
        <div className="sidebar-btn mt-2 mb-2 d-flex justify-content-between align-items-center">
          <div className="ml-3">
            <Button
              className="rounded-pill btn-sm long-btn pl-2"
              variant="primary">
              English
            </Button>{" "}
            <Button
              className="rounded-pill btn-sm long-btn"
              variant="outline-dark">
              {" "}
              German
            </Button>
          </div>
          <FontAwesomeIcon
            className="button-icon globe-icon ml-auto mr-4"
            icon={faGlobe}
          />
        </div>
      </div>

      <div className="edit-public-language-container d-flex justify-content-center p-0">
        <div className="advertisement">
          <Image src={Advertisement} fluid />
        </div>
      </div>

      {/* People you may know */}
      <div className="people pt-3 ">
        <span className="pl-3 pb-3 text">People also viewed</span>
        <div className="pl-3 pt-2">
          {/* Loading profiles from fetched data */}
          {profiles.map((profile) => (
            <div key={profile._id}>
              <div className="d-flex side-bar">
                {/* Images */}
                <Image
                  className="img-circle mt-1"
                  style={{ width: "60px", height: "60px" }}
                  src={profile.image}
                  alt="Linkedin Member"
                  fluid
                  roundedCircle></Image>

                {/* Name & Surname */}
                <div className="profile-details ml-4 mb-2">
                  <div
                    className="profile-name"
                    onClick={() => {
                      navigate(`/user/${profile._id}`);
                    }}>
                    {profile.name} {profile.surname}
                  </div>

                  {/* Title */}
                  <div className="profile-title">{profile.title}</div>

                  {/* Connect */}
                  <div className="profile-message">
                    <Button
                      className="rounded-pill btn-sm"
                      variant="outline-dark">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="people pt-3">
        <span className="pl-3 pb-3 text">People you may know</span>
        <div className="pl-3 pt-2">
          {/* Loading profiles from fetched data */}
          {profiles.map((profile) => (
            <div key={profile._id}>
              <div className="d-flex side-bar">
                {/* Images */}
                <Image
                  className="img-circle mt-1"
                  style={{ width: "60px", height: "60px" }}
                  src={profile.image}
                  alt="Linkedin Member"
                  fluid
                  roundedCircle></Image>

                {/* Name & Surname */}
                <div className="profile-details ml-4 mb-2">
                  <Link to={"/profile/" + profile._id}>
                    <div
                      className="profile-name"
                      onClick={() => {
                        navigate.push(`/profile/${profile._id}`);
                      }}>
                      {profile.name} {profile.surname}
                    </div>
                  </Link>

                  {/* Title */}
                  <div className="profile-title">{profile.title}</div>

                  {/* Connect */}
                  <div className="profile-message">
                    <Button
                      className="rounded-pill btn-sm"
                      variant="outline-dark">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
