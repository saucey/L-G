import { combineReducers } from 'redux'

// import counters from './counters'
import movies from './movies'
import movie from './movie'

/*
 * {
 *    counters: [Number]
 *    theme: String
 * }
 */

// stateReducer :: (state, action) => newState
export default combineReducers({
  movie,
  movies
})
