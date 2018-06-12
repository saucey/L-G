export const getMovieList = () => ({
  type: "GET_MOVIE_LIST"
})

export const updateMovieList = movies => ({
  type: "UPDATE_MOVIE_LIST",
  movies
})

export const selectedMovie = movie => ({
  type: "SELECTED_MOVIE",
  movie
})