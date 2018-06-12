import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieList from '../components/MovieList'

import { getMovieList, selectedMovie } from '../actionCreators'

const mapDispatchToProps = dispatch => bindActionCreators({
  onLoad: getMovieList,
  selectedMovie: selectedMovie
}, dispatch)


const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
