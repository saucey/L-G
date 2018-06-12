import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table, Button } from 'reactstrap';

class MovieList extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    // this.showMovie = this.showMovie.bind(this)
    this.getMovie = this.getMovie.bind(this);
    console.log(this.props)
  }

  componentDidMount() {
    this.props.onLoad();
  }

  getMovies(){
    return this.props.movies;
  }

  getMovie(movie){
    this.props.selectedMovie(movie)
  }

  titleToUrl(title) {
    let newTitle = title.replace(/[^A-Za-z0-9]/g, ' ');
    return '/movie/'+newTitle.split(' ').join('-').toLowerCase();
  }

  render () {
    return (
      <div>
      <Table responsive borderless striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Cover</th>
            <th>title</th>
            <th>Rating</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
        {this.getMovies().map((movie, index) =>
          <tr key={index+1}>
              <td>{index+1}</td>
              <td><img src={movie.img} /></td>
              <td>{movie.title}</td>
              <td>{movie.rating}/10</td>
              <td><Link className="btn btn-primary" onClick={() => {this.getMovie(movie)}} to={this.titleToUrl(movie.title)} >Read More...</Link></td>
          </tr>
         
        )}
        </tbody>
        </Table>
      </div>
    )
  }
}


export default MovieList
