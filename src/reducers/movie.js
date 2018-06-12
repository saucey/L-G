

const initialState = []

// count :: (state, action) => newState
const movie = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "SELECTED_MOVIE":
    console.log(action, 'update the movie')

    return action.movie;

      
    default:
      return state
      
  }
  
}

export default movie
