import {updateMovieList} from '../actionCreators'

const fetchMovies = store => next => action => {

  next(action)
  
  switch (action.type) {
        
    case 'GET_MOVIE_LIST':
    console.log('api is called!')
      fetch("http://localhost:8080/api/movies")
        .then(resp => resp.json())
        .then(movies => store.dispatch(updateMovieList(movies)))
      break;
      
    default:
    
  }
  
  
}

export default fetchMovies
