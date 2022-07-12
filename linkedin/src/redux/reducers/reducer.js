/** @format */

import { EDIT_PROFILES, GET_PROFILES } from "../actions/actions";
const initialState = {
  fetchedProfiles: [],
  editProfiles: [],
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILES: {
      return {
        ...state,
        fetchedProfiles: payload,
      };
    }

    case EDIT_PROFILES: {
      return {
        ...state,
        editProfiles: payload,
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
