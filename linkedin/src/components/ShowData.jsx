/** @format */

import { useEffect } from "react";
import { ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfilesAction } from "../redux/actions/actions";

const ShowData = ({ profile }) => {
  const profilesHave = useSelector((state) => state.fetchedProfiles);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = () => {
    navigate("/profile/" + profile._id);
  };

  return (
    <div>
      {profilesHave &&
        profilesHave.slice(0, 10).map((profile) => (
          <div>
            <ListGroupItem onClick={goToDetails}>{profile.name}</ListGroupItem>
            <ListGroupItem
              className="mb-5"
              onClick={() => navigate("/profile")}>
              {profile.email}
            </ListGroupItem>
          </div>
        ))}
    </div>
  );
};

export default ShowData;
