import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieDetails from '../components/MovieDetails'

import { getMovieList, selectedMovie } from '../actionCreators'




const mapStateToProps = state => ({
  movie: state.movie,
})

export default connect(mapStateToProps)(MovieDetails)
