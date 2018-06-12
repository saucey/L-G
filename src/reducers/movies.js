

const initialState = []

// count :: (state, action) => newState
const movies = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "UPDATE_MOVIE_LIST":

    return action.movies;

      
    default:
      return state
      
  }
  
}

export default movies
