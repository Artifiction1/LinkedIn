/** @format */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../redux/actions/actions";

const EditData = () => {
  const editProfiles = useSelector((state) => state.editProfiles);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="back-office ">
        <Col>
          <h2>Edit Profiles</h2>
          <div id="searchResults">
            <input
              type="text"
              id="area"
              className="form-control mb-2"
              placeholder="type your area"
              aria-describedby="basic-addon2"
            />
            <div className="text-center mt-3">
              <button
                className="btn btn-outline-secondary btn-sm "
                type="button"
                id="button-addon1"
                onClick={() => dispatch(editProfileAction())}>
                Edit
              </button>
            </div>
          </div>
          {editProfiles && <div>{editProfiles.area}</div>}
        </Col>
      </Row>
    </Container>
  );
};

export default EditData;
