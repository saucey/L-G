import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import fetchMovies from './middleware/fetchMovies'

export default createStore(
  reducers,
  applyMiddleware(fetchMovies)
)