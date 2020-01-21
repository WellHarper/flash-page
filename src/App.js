import React from 'react';
import './App.css';
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={{span: 2, offset: 10}}>
            <span>Foto</span>
            <span>Nome</span>
        </Col>
      </Row>
    </div>
  );
}

export default App;
