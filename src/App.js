import React from 'react';
import './App.css';
import './font.css';
import {Row, Col,Form, Button} from 'react-bootstrap';

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
        <Col md={2} className="option">
          <img className="icon" src='./new.svg'/> 
          NOVO FLASH
        </Col>
        <Col md={2} className="option">
          <img className="icon"  src="./report.svg"/>
          RELATÓRIO
        </Col>
        <Col md={2} className="option">
          <img className="icon" src='./control.svg' />
          TODOS FLASHES
        </Col>
      </Row>
      <div className="principal">
      <Row className="columns">
          <Col md={6} className="first-column">
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
              <Form.Group>
              <Form.Label>
                LOJA
              </Form.Label>
              <Form.Control type="text"/>
              </Form.Group>
              <Row>
                <Col md={6}>
                <Form.Group>
                  <Form.Label>DATA INICIAL</Form.Label>
                  <Form.Control type="date"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                  <Form.Label>DATA FINAL</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
                </Col>
              </Row>
              <Form.Group className="last">
              <Form.Label>
                EXCLUSIVO DO CLUBE?
              </Form.Label>
              <br></br>
              <Form.Check inline type="radio" label="SIM" name="option"/>
              <Form.Check inline type="radio" label="NÃO" name="option"/>
              </Form.Group>
            </Form> 
          </Col>
          <Col md={5} className="second-column">
            <label>CANAIS</label>
            <div className="canais">
              SMS
            </div>
            <div className="canais">
              Push
            </div>
            <div className="canais">
              Banner no App
            </div>
            <div className="canais">
              Email-Marketing
            </div>
          </Col>
      </Row>
      <Row>
      <Col md={12} className="first-button-zone">
        <span className="obs">*campos obrigatórios</span>
        <br/>
        <submit type="button" class="button publish-button">Publicar</submit>
      </Col>

      <Col md={12} className="second-button-zone">
        <submit type="button" className="button drop-button">Apagar</submit>
        <submit type="button" className="button save-button">Salvar</submit>
      </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
