/** @format */

import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
  const [profile, setProfile] = useState([]);

  const [filteredData, setfilteredData] = useState([]);

  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (event) => {
    const searchProfile = event.target.value;
    const newFilter = profile.filter((value) => {
      return value.name.toLowerCase().includes(searchProfile.toLowerCase());
    });

    if (searchProfile.length > 0) {
      setfilteredData(newFilter);
    } else {
      setfilteredData([]);
    }
  };

  const onInputClick = (hasItBeenClicked) => {
    console.log(hasBeenClicked);
    setHasBeenClicked(hasItBeenClicked);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <input
          onClick={() => onInputClick(false)}
          type="text"
          placeholder="Search"
          className="rounded-right"
          onChange={handleFilter}
          style={{
            backgroundColor: "#EEF3F8",
            border: "0",
            height: "38px",
            width: "180px",
            outline: "none",
          }}
        />
      </div>

      {filteredData.length !== 0 && (
        <div>
          {filteredData.slice(0, 10).map((profile) => {
            return (
              <ListGroup>
                <div>
                  <Link to={"/profile"}>
                    <ListGroupItem
                      style={{
                        textAlign: "left",
                      }}
                      onClick={() => onInputClick(true)}>
                      {/* <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                        src={profile.image}
                        alt=""
                      /> */}
                      <span
                        className="mx-3"
                        style={{ color: "black", fontSize: "14px" }}>
                        <strong>{profile.name}</strong>
                      </span>
                      <span style={{ color: "black", fontSize: "14px" }}>
                        {profile.title}
                      </span>
                    </ListGroupItem>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
