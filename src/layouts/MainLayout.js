import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class MainLayout extends Component {

  render () {
    return (
      <Container>
        {this.props.children} 
      </Container>
    )
  }
}


export default MainLayout
