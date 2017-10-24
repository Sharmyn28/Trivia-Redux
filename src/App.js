import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Grid>
      <header>
        <Row>
          <Col sm={12} md={12} className="img-question">
           jbhj
          </Col>
        </Row>
      </header>
      <Row className="content ">
        <Col sm={12} md={12} className="progress-container">
          <Col sm={12} md={12} className="text-left pogress-label">
            <p>preguntas de 5</p>
          </Col>
          <Col className="progress">
            <Col className="progress-bar"  >
              <span className="sr-only">100%</span>
            </Col>
          </Col>
        </Col>
        <Col sm={12} md={12} className="text-center">
          
        </Col>
        <Col sm={12} md={12} className="btn-social">
          <ul className="social-network social-circle">
            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  )
}

export default App;
