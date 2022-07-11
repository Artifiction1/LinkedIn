const initialState = {
  posts: {
    postsList: [],
    newPost: {},
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: {
          ...state.posts,
          postsList: action.payload,
        },
      };
    case "NEW_POST":
      return {
        ...state,
        posts: {
          ...state.posts,
          newPost: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
