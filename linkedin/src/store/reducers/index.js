const initialState = {
    Experience: {}
}

const mainReducer = (state = initialState, action) => {
    console.log(action, state)
  
    const { type, payload } = action
  
    switch (type) {
      case 'ADD_TO_EXP':
        return {
          ...state,
          Experience: [payload],
        }
    }
}
export default mainReducer