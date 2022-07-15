/** @format */

import { EDIT_PROFILES, GET_PROFILES } from "../actions/actions";
const initialState = {
  fetchedProfiles: [],
  editProfiles: [],
  changer: '',
  Experience: {
    area: "String",
    company: 'String',
    description: 'String',
    role: 'String',
    startDate: 'String',
    endDate: 'String'}
};

const mainReducer = (state = initialState, action) => {
  const { type, payload, target } = action;

  switch (type) {
    case 'Changed': {
      return {
      ...state,
      changer: payload}
    }
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
    case 'ADD_TO_EXP':
        switch (target){
          case 'area':
        return {
          ...state,
          Experience:{...state.Experience,
          area: payload,}
        }
        case 'company':
        return {
          ...state,
Experience:{...state.Experience,
          company: payload,}
        }
        case 'description':
        return {
          ...state,
      Experience:{...state.Experience,
          description: payload,}
        }
        case 'role':
        return {
          ...state,
        Experience:{...state.Experience,
          role: payload,}
        }
        case 'startDate':
        return {
          ...state,
          Experience:{...state.Experience,
          startDate: payload,}
        }
        case 'endDate':
        return {
          ...state,
          Experience:{...state.Experience,
          endDate: payload,}
        }
        default:
      return state.Exercise
    }
    default:
      return state;
  }
};

export default mainReducer;
