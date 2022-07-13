const initialState = {
  Experience: {
            area: "String",
            company: 'String',
            description: 'String',
            role: 'String',
            startDate: 'String'}
}

const mainReducer = (state = initialState, action) => {
    console.log(action, state)
  
    const { type, payload, target} = action
  
    switch (type) {
      case 'ADD_TO_EXP':
        switch (target){
          case 'area':
        return {
          Experience:{...state.Experience,
          area: payload,}
        }
        case 'company':
        return {
Experience:{...state.Experience,
          company: payload,}
        }
        case 'description':
        return {
      Experience:{...state.Experience,
          description: payload,}
        }
        case 'role':
        return {
        Experience:{...state.Experience,
          role: payload,}
        }
        case 'startDate':
        return {
          Experience:{...state.Experience,
          startDate: payload,}
        }
    }
    default: return state
  }
}
export default mainReducer