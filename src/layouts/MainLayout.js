import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class MainLayout extends Component {


  render () {
    return (
      <Container style={{padding: '40px'}}>
        {this.props.children} 
      </Container>
    )
  }
}


export default MainLayout
