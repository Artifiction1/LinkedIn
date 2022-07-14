/** @format */

import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./HomeFeed.css";

const HomeFeed = () => {
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
    <div className="all-people">
      <div className="pl-3 pt-2">
        <div className="d-flex justify-content-around mb-2">
          <div id="titleFeedCard" className="ml-3">
            Add to your feed
          </div>
          <i id="infoIcon" className="bi bi-info-square-fill"></i>
        </div>
        {/* Loading profiles from fetched data */}
        {profiles.slice(0, 4).map((profile) => (
          <div key={profile._id}>
            <div className="d-flex side-bar">
              <Image
                className="img-circle mt-1"
                style={{ width: "60px", height: "60px" }}
                src={profile.image}
                alt="Linkedin Member"
                fluid
                roundedCircle></Image>

              <div className="profile-details ml-4 mb-2">
                <div
                  className="profile-name"
                  onClick={() => {
                    navigate(`/user/${profile._id}`);
                  }}>
                  {profile.name} {profile.surname}
                </div>

                <div className="profile-title">{profile.title}</div>

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
  );
};

export default HomeFeed;
