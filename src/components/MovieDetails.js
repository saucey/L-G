import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Row, Col } from 'reactstrap';

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
      <Row>
          <Col md="3">
            <img src={this.props.movie.imgLg}/>

          </Col>
          <Col md="9">
            <Jumbotron>
                <h1 className="display-3">{this.props.movie.title} </h1>
                <h5 className="lead">{this.props.movie.summary}</h5>
                <hr className="my-2" />
                <p>{this.props.movie.description}</p>
                <p className="lead">
                  <Link className="btn btn-success" to="/" >Back To All Movies...</Link>     
                </p>
            </Jumbotron>    
          
          </Col>
      </Row>
      </div>
    )
  }
}


export default MovieDetails
