import initialState from '../store/initalState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOWS_FEED":
      return {
        ...state,
        showsFeed: action.payload,
      }
        
    default:
      return state
  }
}

export default rootReducer