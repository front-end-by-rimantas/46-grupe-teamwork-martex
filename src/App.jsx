import "./App.css";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (<>
    <Container>
      <Row className="justify-content-center">
        <Col sm={10} md={8} xxl={7} > HEADER TEXT </Col>
      </Row >
      <Row className="justify-content-center">
        <Col sm={11} md={12} > BLOCK CONTENT </Col>
      </Row>
      <Row className="justify-content-center">
        <Col> SOME SLIDING CARDS </Col>
      </Row>
    </Container>
    <Container>
      <Row className="justify-content-center" >
        <Col sm={10} md={7} xxl={6}> HEADER TEXT </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={4}> CARD </Col>
        <Col sm={12} md={4}> CARD </Col>
        <Col sm={12} md={4}> CARD </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6}>TEXT</Col>
        <Col sm={12} md={6}> IMAGE </Col>
      </Row>
      
    </Container>
    </>
  );
}

export default App;
