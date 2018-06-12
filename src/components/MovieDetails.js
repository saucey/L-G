import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class MovieDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  getMovies(){
    return this.props.movie;
  }

  render () {
    console.log(this.props, 'in details')
    return (
      <div>
          <h1>{this.props.movie.title}</h1>
          <h5>{this.props.movie.summary}</h5>
          <p>{this.props.movie.description}</p>
          <Link to="/" >Back To All Movies...</Link>     
      </div>
    )
  }
}


export default MovieDetails
