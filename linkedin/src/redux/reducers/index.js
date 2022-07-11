const initialState = {
  posts: {
    postsList: [],
    
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
   
    default:
      return state;
  }
};

export default mainReducer;
