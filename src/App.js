import React from 'react';
import './App.css';
import {Row, Col,Form, FormGroup} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={{span: 2, offset:10}} className="avatar">
          <span className="foto">FT</span>
          <span>Nome</span>
        </Col>  
      </Row>
      <Row>
        <Col className="title">
          <h1>FLASH</h1>  
          <span>Home/Flash</span>
        </Col>
      </Row>
      <Row className="options">
        <Col md={2} className="option">OI</Col>
        <Col md={2} className="option">HELLO</Col>
        <Col md={2} className="option">oLA</Col>
      </Row>
      <Row>
          <Col md={6} className="one">
            <Form>
              <Form.Group>
                <Form.Label> 
                  SHOPPING*
                </Form.Label>
                <Form.Control as="select">
                  <option selected disabled>--Escolha--</option>
                  <option>Exemple</option>
                </Form.Control>
              </Form.Group>
              <Form.Label>
                LOJA
              </Form.Label>
              <Form.Control type="text"/>
              <Row>
                <Col md={6}>
                  <Form.Label>DATA INICIAL</Form.Label>
                  <Form.Control type="date"/>
                </Col>
                <Col md={6}>
                  <Form.Label>DATA FINAL</Form.Label>
                  <Form.Control type="date"/>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={6} className="two">
            aaaaaaaaaaaaaaaaaaaaaaaa
          </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
