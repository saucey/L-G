

const initialState = []

// count :: (state, action) => newState
const movie = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "SELECTED_MOVIE":
    return action.movie;

      
    default:
      return state
      
  }
  
}

export default movie
