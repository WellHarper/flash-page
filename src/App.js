import React from 'react';
import './App.css';
import {Row, Col} from 'react-bootstrap';

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
      <Row>
        <Col md={{span: 2}} className="option">OI</Col>
        <Col md={{span: 2}}className="option">HELLO</Col>
        <Col md={{span: 2}}className="option">oLA</Col>
      </Row>
      
      
    </div>
  );
}

export default App;
